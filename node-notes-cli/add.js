import { readFile, writeFile } from 'node:fs/promises';

async function addNote() {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    const newID = data.nextId;
    const newNote = process.argv[2];

    data.notes[newID] = newNote;
    data.nextId++;

    const updatedData = JSON.stringify(data, undefined, 2);

    await writeFile('data.json', updatedData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

addNote();
