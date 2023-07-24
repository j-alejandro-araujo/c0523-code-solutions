import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('Returns even numbers only', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents', () => {
    const amount = 12.334568;
    const result = toDollars(amount);
    expect(result).toEqual(`$12.33`);
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numbers = [2, 4, 6, 8, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key if it is a number', () => {
    const obj = { two: 2, three: 'three', four: 4, five: 'five', six: 6 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      two: 4,
      three: 'three',
      four: 8,
      five: 'five',
      six: 12,
    });
  });
});
