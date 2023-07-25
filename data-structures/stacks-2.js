export function countValues(stack) {
  let count = 0;
  let data = stack.pop();
  while (data !== undefined) {
    data = stack.pop();
    count++;
  }
  return count;
}

export function maxValue(stack) {
  let data = stack.pop();
  let max = -Infinity;
  while (data !== undefined) {
    if (data > max) {
      max = data;
    }
    data = stack.pop();
  }
  return max;
}
