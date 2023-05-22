# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To troubleshoot and debug goce.
- What is the purpose of events and event handling?
  The purpose of events and event handling is to control events that happen in your programming and decide what should happen if an event occurs.
- Are all possible parameters required to use a JavaScript method or function?
  No, functions can still work w/out a parameter.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener()
- What is a callback function?
  A function passed into another function as an arguement.
- What object is passed into an event listener callback when the event fires?
  A UI Event such as PointerEvent or MouseEvent.
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It's a property of an event object that returns the HTML element that triggered the event. You can check via the DOM.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  In the first instance, handleClick is a variable. Whereas the second instance, handleClick is a function.

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
