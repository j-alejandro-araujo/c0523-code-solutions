/* exported capitalize */
function capitalize(word) {
  const capFirstLetter = word.charAt(0).toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  const capWord = capFirstLetter + restOfWord;

  return capWord;
}
