/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// isUnderFive(number)
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else return false;
}
console.log('Value of isUnderFive(8):', isUnderFive(8));

// isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}
console.log('Value of isEven(4):', isEven(4));

// startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else return false;
}
console.log('Value of sartsWithJ(Jon):', startsWithJ('Jon'));

// isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else return false;
}

const jon = {
  name: 'Jon',
  age: 33,
};

console.log('Value of isOldEnoughToDrink(33):', isOldEnoughToDrink(jon));

// isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else return false;
}
console.log('Value of isOldEnoughToDrive(33):', isOldEnoughToDrive(jon));

// isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  }
}
console.log(
  'Value of isOldEnoughToDrinkAndDrive(33):',
  isOldEnoughToDrinkAndDrive(jon)
);

// categorizeAcidity(ph)
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('Value of categorizeAcidity(9):', categorizeAcidity(9));

// introduceWarnerBro(name)
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log("We're the warner brothers!");
      break;
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}
introduceWarnerBro('dot');

// recommentMovie(genre)
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Violent Christmas');
      break;
    case 'comedy':
      console.log('Pineapple Express');
      break;
    case 'horror':
      console.log('Insidious');
      break;
    case 'drama':
      console.log('Hamilton');
      break;
    case 'musical':
      console.log('The Nightmare Before Christmas');
      break;
    case 'sci-fi':
      console.log('Interstellar');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comdey, horror, drama, musical, or sci-fi'
      );
  }
}
recommendMovie('comedy');
