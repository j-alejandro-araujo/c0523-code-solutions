/* exported defaults */
function defaults(target, source) {
  const sourceK = Object.keys(source);
  const targetK = Object.keys(target);

  for (let i = 0; i < sourceK.length; i++) {
    const key = sourceK[i];

    if (!targetK.includes(key)) {
      target[key] = source[key];
    }
  }
}
