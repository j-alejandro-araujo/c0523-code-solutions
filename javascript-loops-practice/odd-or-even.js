/* exported oddOrEven */
function oddOrEven(numbers) {
  const newList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      newList.push('odd');
    } else {
      newList.push('even');
    }
  }
  return newList;
}
