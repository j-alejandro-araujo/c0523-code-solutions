/* exported tail */
function tail(array) {
  const afterFirstArray = [];

  for (let i = 1; i < array.length; i++) {
    afterFirstArray.push(array[i]);
  }
  return afterFirstArray;
}
