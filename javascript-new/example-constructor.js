function ExampleConstructor() {}

console.log('Value of prototype:', ExampleConstructor.prototype);
console.log('Typeof of prototype:', typeof ExampleConstructor.prototype);

const newVariable = new ExampleConstructor();

console.log('Value of newVariable:', newVariable);

const instanceOf = newVariable instanceof ExampleConstructor;

console.log('Value of instanceOf:', instanceOf);
