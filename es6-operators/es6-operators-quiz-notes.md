# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are boolean operators that evaluate from left to right.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  IT means that when JS evaluates an '$$' or '||' expression, if the 1st operand is true, JS will short circuit and not even look at the second operand.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  It's a logical operator that returns its right-hand side operand when its left-side operand is null or undefined. Short circuit evaluation does not apply here like it does with '||'.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  An operator that operates on 3 operands and requires 3 arguments used for conditional expression.
- What is the `?.` (optional chaining) operator? When would you use it?
  It takes the reference to its left and checks if it is undefined or null. If the reference is either of these nullish values, the checks will stop and return undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  It can be used on iterables like arrays or objects and expand it to its individual elements.
- What data types can be spread into an array? Into an object?
  Each member of the iterable element will have its own data type.
- How does spread syntax differ from rest syntax?
  Spread syntax expands an array into elements, while rest syntax will collect multiple elements and condense them into one single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
