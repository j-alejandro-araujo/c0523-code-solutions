import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const num1 = Number(process.argv[2]);
const operator = process.argv[3];
const num2 = Number(process.argv[4]);

let result;

if (operator === 'plus') {
  result = add(num1, num2);
} else if (operator === 'minus') {
  result = subtract(num1, num2);
} else if (operator === 'times') {
  result = multiply(num1, num2);
} else if (operator === 'over') {
  result = divide(num1, num2);
} else {
  result = 'ERROR';
}

console.log(`result: ${result}`);
