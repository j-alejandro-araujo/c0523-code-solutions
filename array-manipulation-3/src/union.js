/* exported union */
function union(first, second) {
  const unionArray = [...first];

  for (let i = 0; i < second.length; i++) {
    if (!unionArray.includes(second[i])) {
      unionArray.push(second[i]);
    }
  }

  return unionArray;
}
