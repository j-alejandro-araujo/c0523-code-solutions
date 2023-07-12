import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();

// Clients can GET a list of notes.
async function readAllNotes() {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);
    const notes = Object.values(data.notes);
    return notes;
  } catch (error) {
    console.error(`error: ${error}`);
    throw error;
  }
}

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await readAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.sendStatus(500);
  }
});

// Clients can GET a single note by id.
app.get('/api/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'ID must be a positive integer.' });
      return;
    }

    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);
    const note = data.notes[id];

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ error: `Cannot find note with id ${id}` });
    }
  } catch (error) {
    console.log(`error: ${error}`);
    res.sendStatus(500);
  }
});

// Clients can POST a new note.
let nextId = 1;

async function createNote(notes) {
  try {
    const data = {
      notes: {},
    };

    notes.forEach((note) => {
      data.notes[note.id] = note;
    });

    data.nextId++;

    await writeFile('data.json', JSON.stringify(data, undefined, 2));
  } catch (error) {
    console.error(`error: ${error}`);
    throw error;
  }
}

app.use(express.json());

app.post('/api/notes', async (req, res) => {
  try {
    const content = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Content is required.' });
      return;
    }

    const notes = await readAllNotes();
    const newNote = {
      id: nextId++,
      content,
    };

    notes.push(newNote);
    await createNote(notes);

    res.status(201).json(newNote);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Clients can DELETE a note by id.
async function deleteNote(noteId) {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    if (!(noteId in data.notes)) {
      const error = new Error(`Cannot find note with id ${noteId}`);
      error.notFound = true;
      throw error;
    }

    delete data.notes[noteId];

    const updatedData = JSON.stringify(data, undefined, 2);

    await writeFile('data.json', updatedData);
  } catch (error) {
    console.log(`error: ${error}`);
    throw error;
  }
}

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'ID must be a positive integer.' });
      return;
    }

    try {
      await deleteNote(id);
      res.sendStatus(204);
    } catch (error) {
      if (error.notFound) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Clients can replace a note (PUT) by id.
async function editNote(id, content) {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    if (!(id in data.notes)) {
      return undefined;
    }

    data.notes[id].content = content;

    const updatedData = JSON.stringify(data, undefined, 2);

    await writeFile('data.json', updatedData);
    return data.notes[id];
  } catch (error) {
    console.error(`error: ${error}`);
    throw error;
  }
}

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'ID must be a positive integer.' });
      return;
    }

    const content = req.body.content;
    if (!content) {
      res.status(400).json({ error: 'Content is a required field.' });
      return;
    }

    const updatedNote = await editNote(id, content);
    if (updatedNote === undefined) {
      res.status(404).json({ error: `Cannot find note with id ${id}` });
      return;
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(`error: ${error}`);
    res.status(500).json({ error: 'An unexpected error has occurred.' });
  }
});

app.listen(8080, () => {
  console.log('Server listening on port 8080!');
});
