/* exported reverseWord */
function reverseWord(word) {
  let rString = '';

  for (let i = word.length - 1; i >= 0; i--) {
    rString += word[i];
  }
  return rString;
}

console.log(reverseWord('book'));
