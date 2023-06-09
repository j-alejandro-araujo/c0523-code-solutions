# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  (parameter) => expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  You'd only be able to assign that function ONE expression.
- When using _concise body syntax_, how do you return an object literal?
  By wrapping the object literal in parantheses.
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    () => 42
  - How many arguments does the arrow function take?
    No arguments since the parameter field is empty.
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    One argument, function foo.
  - What type of argument is passed to the function `foo`?
    An arrow function.
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {console.log(`4y = ${4 * y}`);} - How many arguments does the arrow function take?
  One argument, (y). - What value does it return?
  It doesn't have a specified return statment, so it will not return a specific value. - How many arguments are passed to the function `bar`?
  One. - What type of argument is passed to the function `bar`?
  An arrow function. - When does the arrow function's code get executed?
  When the function bar is called.
- How does the value of `this` differ between standard functions and arrow functions?

Standard functions have their own 'this' value, however arrow function's 'this' value is determined by the surrounding lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
