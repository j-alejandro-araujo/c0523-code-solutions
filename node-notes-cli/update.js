import { readFile, writeFile } from 'node:fs/promises';

async function updateNote() {
  try {
    const fileData = await readFile('data.json');
    const data = JSON.parse(fileData);

    const noteId = process.argv[2];
    const newContent = process.argv[3];

    data.notes[noteId] = newContent;

    const updatedData = JSON.stringify(data, undefined, 2);
    await writeFile('data.json', updatedData);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

updateNote();
