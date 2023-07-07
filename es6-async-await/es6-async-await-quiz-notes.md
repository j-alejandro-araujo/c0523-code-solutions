# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  They are used for handling asynchronous operations in JS.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async and Await are alternatives for handling promises. They differ in that allow developers to write code asynchronously.
- When do you use `async`?
  When you want to declare a function as asynchronously.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  To pause the execution of an asynchronous function until a promise is resolved.
- How do you handle errors with `await`?
  By utilizing try or catch.
- What do `try`, `catch` and `throw` do? When do you use them?
  Try is used to enclose code that might throw an error. Catch will actually handle the error by performing handle error logic.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The execution will continue without waiting for the promise to resolve and the funciton will return immediately and never throws an error.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async and Await is preferred for its ease of use.

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
