/* exported zip */
function zip(first, second) {
  const zipped = [];
  const length = Math.min(first.length, second.length);

  for (let i = 0; i < length; i++) {
    zipped.push([first[i], second[i]]);
  }

  return zipped;
}
