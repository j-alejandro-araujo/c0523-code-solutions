/* exported pick */
function pick(source, keys) {
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
