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

// isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

// startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else return false;
}

// isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else return false;
}

// isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else return false;
}

// isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  if (isOldEnoughToDrink === true && isOldEnoughToDrive === true) {
    return false;
  }
}

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
