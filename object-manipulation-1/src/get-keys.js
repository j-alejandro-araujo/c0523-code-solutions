/* exported getKeys */
function getKeys(object) {
  const keyArray = [];

  for (const key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
