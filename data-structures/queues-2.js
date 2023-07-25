export function postpone(queue) {
  if (queue.peek() !== undefined) {
    queue.enqueue(queue.dequeue());
  }
}

export function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    let i = 0;
    while (i < index) {
      i++;
      queue.enqueue(queue.dequeue());
    }
    return queue.dequeue();
  }
}
