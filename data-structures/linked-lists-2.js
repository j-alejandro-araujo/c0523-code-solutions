import LinkedList from './lib/linked-list';

export function getLength(list) {
  let count = 1;
  while (list.next !== null) {
    count++;
    list = list.next;
  }
  return count;
}

export function append(list, value) {
  const newNode = new LinkedList(value);
  while (list.next !== null) {
    list = list.next;
  }
  list.next = newNode;
  return list;
}

export function getTail(list) {
  while (list.next !== null) {
    list = list.next;
  }
  return list.data;
}

export function includes(list, value) {
  if (list.data === value) return true;
  while (list.next !== null) {
    list = list.next;
    if (list.data === value) return true;
  }
  return false;
}
