/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
