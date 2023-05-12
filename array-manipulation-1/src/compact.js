/* exported compact */

// Creat a function that omits false, null,
// NaN, 0, -0, undefined, " ",

function compact(array) {
  const cleanArray = [];
  const removeThese = [false, null, NaN, 0, -0, undefined, ' '];

  for (let i = 0; i < array.length; i++) {
    if (!removeThese.includes(array[i]) && array[i] !== '') {
      cleanArray.push(array[i]);
    }
  }
  return cleanArray;
}
