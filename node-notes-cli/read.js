import { readFile } from 'node:fs/promises';

async function readNote() {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    const notes = data.notes;
    const noteIds = Object.keys(notes);

    noteIds.forEach((noteId) => {
      const content = notes[noteId];
      console.log(`${noteId}: ${content}`);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

readNote();
