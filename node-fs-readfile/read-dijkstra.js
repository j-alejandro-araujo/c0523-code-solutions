import { readFile } from 'node:fs/promises';

async function readTxtFile() {
  try {
    const data = await readFile('dijkstra.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log('Error!', error);
  }
}

readTxtFile();
