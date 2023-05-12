/* exported initial */
function initial(array) {
  const allExceptLast = [];

  for (let i = 0; i < array.length - 1; i++) {
    allExceptLast.push(array[i]);
  }
  return allExceptLast;
}
