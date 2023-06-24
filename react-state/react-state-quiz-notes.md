# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are functions that allow you to use use state.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Only using hooks at the top level of a functional component and not using hooks conditionally.
- What is the purpose of state in React?
  To store and manage mutable data that can be used to control the behavior and appearence of a componenet.
- Why can't we just maintain state in a local variable?
  Because local variables are not preserved between re-renders of a component.
- What two actions happen when you call a `state setter` function?
  The new state value is set, and the componenent is re-rendered to reflect the updated state.
- When does the local `state variable` get updated with the new value?
  During the next re-render of the component after calling the state setter function.

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
