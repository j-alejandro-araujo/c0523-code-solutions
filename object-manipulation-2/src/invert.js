/* exported invert */
function invert(source) {
  const newObj = {};
  const keys = Object.keys(source);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = source[key];
    newObj[value] = key;
  }
  return newObj;
}
