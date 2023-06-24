/* exported difference */
function difference(first, second) {
  const diffArray = [];

  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i]) && !diffArray.includes(first[i])) {
      diffArray.push(first[i]);
    }
  }

  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i]) && !diffArray.includes(second[i])) {
      diffArray.push(second[i]);
    }
  }

  return diffArray;
}
