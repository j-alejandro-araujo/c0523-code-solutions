// convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(
  'Value of function convertMinutesToSeconds w/ argument 8:',
  convertMinutesToSeconds(8)
);

// greet(name)
function greet(name) {
  return 'Hey, ' + name;
}
console.log('Value of function greet w/ argument Jesus:', greet('Jesus'));

// getArea(width, height)
function getArea(width, height) {
  return width * height;
}
console.log('Value of function getArea w/ argument of 4, 36:', getArea(4, 36));

// getFirstName(person)
function getFirstName(person) {
  person = {
    firstName: 'Jesus',
    lastName: 'Araujo',
  };
  return person.firstName;
}
console.log(
  'Value of getFirstName w/ argument of Jesus, Araujo:',
  getFirstName()
);

// getLastElement(array)
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  'Value of function getLastElement w/ argument of mango, pineapple apples:',
  getLastElement(['mango', 'pineapple', 'apples'])
);
