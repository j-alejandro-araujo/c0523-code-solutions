export function getFront(queue) {
  if (queue.length === 0) {
    return undefined;
  } else {
    return queue.peek();
  }
}

export function addToBack(queue, value) {
  queue.enqueue(value);
}

export function takeFront(queue) {
  if (queue.length === 0) {
    return undefined;
  } else {
    return queue.dequeue();
  }
}

export function isEmpty(queue) {
  const topQueue = queue.peek();
  return typeof topQueue === 'undefined';
}
