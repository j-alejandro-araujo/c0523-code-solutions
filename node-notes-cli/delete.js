import { readFile, writeFile } from 'node:fs/promises';

async function deleteNote() {
  try {
    const noteId = process.argv[2];
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    delete data.notes[noteId];

    const updatedData = JSON.stringify(data, undefined, 2);

    await writeFile('data.json', updatedData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

deleteNote();
