/* exported capitalizeWords */
function capitalizeWords(string) {
  const seperatedWords = string.split(' ');

  for (let i = 0; i < seperatedWords.length; i++) {
    const word = seperatedWords[i];
    const capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    seperatedWords[i] = capWord;
  }
  return seperatedWords.join(' ');
}
