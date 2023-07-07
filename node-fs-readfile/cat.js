import { readFile } from 'node:fs/promises';

async function cat() {
  try {
    const fileName = process.argv.slice(2);

    const fileTxt = await Promise.all(
      fileName.map((fileName) => readFile(fileName, 'utf8'))
    );

    const concatTxt = fileTxt.join('\n');
    console.log(concatTxt);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

cat();
