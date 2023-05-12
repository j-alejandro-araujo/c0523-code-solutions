/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else if (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
}
