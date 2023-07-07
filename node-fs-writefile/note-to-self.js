import { writeFile } from 'node:fs/promises';

async function noteToSelf() {
  try {
    const note = process.argv[2];
    await writeFile('note.txt', note + '\n', 'utf8');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

noteToSelf();
