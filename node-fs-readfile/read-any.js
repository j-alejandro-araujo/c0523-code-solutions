import { readFile } from 'node:fs/promises';

async function readAnyFile() {
  try {
    const filePath = process.argv[2];
    const fileText = await (await readFile(filePath)).toString();
    console.log(fileText);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

readAnyFile();
