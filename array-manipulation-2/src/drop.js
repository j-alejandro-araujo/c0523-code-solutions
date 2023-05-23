/* exported drop */
function drop(array, count) {
  if (count >= array.length) {
    return [];
  }
  return array.slice(count);
}
