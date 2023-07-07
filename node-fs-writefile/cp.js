import { writeFile, readFile } from 'node:fs/promises';

async function copy() {
  try {
    const source = process.argv[2];
    const destination = process.argv[3];
    const info = await readFile(source);

    await writeFile(destination, info, 'utf8');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

copy();
