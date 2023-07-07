import { writeFile } from 'node:fs/promises';

async function randomNumber() {
  try {
    const number = Math.random() + '\n';
    await writeFile('random.txt', number, 'utf8');
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

randomNumber();
