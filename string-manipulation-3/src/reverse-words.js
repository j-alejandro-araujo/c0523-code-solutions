/* exported reverseWords */
function reverseWords(string) {
  let reverse = '';
  let word = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char !== ' ') {
      word = char + word;
    } else {
      reverse += word + ' ';
      word = '';
    }
  }
  return reverse + word;
}
