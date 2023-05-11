/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('Value of getNumbersToTen:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log(
  'Value of repeatedWord(kamehameha, 15):',
  repeatWord(' kamehameha ', 15)
);

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('Doughnut');

function doubleAll(numbers) {
  const doubled = [];

  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('Value of doubleAll(5, 10, 30, 55):', doubleAll([5, 10, 30, 55]));

function getKeys(object) {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

const testPerson = {
  firstName: 'Walter',
  lastName: 'Bishop',
  Occupation: 'Evil Scientist',
};

console.log('Value of getKeys:', getKeys(testPerson));

function getValues(object) {
  const values = [];

  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

console.log('Value of getValues:', getValues(testPerson));
