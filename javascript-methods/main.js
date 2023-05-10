// The Math Object
const rNumber1 = 8;
const rNumber2 = 130;
const rNumber3 = 4523;

const maximumValue = Math.max(rNumber1, rNumber2, rNumber3);

console.log('Value of maximumValue:', maximumValue);

const heroes = ['Wolverine', 'Gambit', 'Storm', 'Cyclops'];

const randomNumber = Math.random() * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('Value of randomHero:', randomHero);

// Array Methods
const library = [
  {
    title: 'Green Eggs & Ham',
    author: 'Dr. Suess',
  },
  {
    title: "Old Man's War",
    author: 'John Scalzi',
  },
  {
    title: 'Ready Player One',
    author: 'Ernest Cline',
  },
];

const lastBook = library.pop();
console.log('Value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(0, 1);

console.log('Value of library:', library);

// String Methods
const fullName = 'Jesus Araujo';

const firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName:', sayMyName);
