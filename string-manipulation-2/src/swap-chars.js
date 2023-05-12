/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const stringArray = Array.from(string);
  const standin = stringArray[firstIndex];
  stringArray[firstIndex] = stringArray[secondIndex];
  stringArray[secondIndex] = standin;

  const newString = stringArray.join('');
  return newString;
}
