export function getTop(stack) {
  if (stack.length === 0) {
    return undefined;
  } else {
    return stack.peek();
  }
}

export function addToTop(stack, value) {
  stack.push(value);
}

export function takeTop(stack) {
  if (stack.length === 0) {
    return undefined;
  } else {
    return stack.pop();
  }
}

export function isEmpty(stack) {
  const topElement = stack.peek();
  return typeof topElement === 'undefined';
}
