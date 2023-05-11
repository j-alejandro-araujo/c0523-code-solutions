/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNullsArray = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      noNullsArray.push(values[i]);
    } else;
  }
  return noNullsArray;
}
