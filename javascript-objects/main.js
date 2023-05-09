const student = {
  firstName: 'Jesus',
  lastName: 'Araujo',
  age: 30,
};

const fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Accounting Analyst';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log(student);

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2010,
};

vehicle['color'] = 'Blue';
vehicle['isConvertible'] = false;

console.log('Value of color', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

const pet = {
  name: 'Walter',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
