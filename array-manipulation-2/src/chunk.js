/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let i = 0;

  while (i < array.length) {
    newArray.push(array.slice(i, i + size));
    i += size;
  }
  return newArray;
}
