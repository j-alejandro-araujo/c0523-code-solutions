# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  By providing a callback function as its first argument.
- What browser function can be used to make HTTP requests to a server in React?
  fetch()
- How do you use `useEffect` to load component data just once when the component mounts?
  By using useEffect w/ an empty dependency array.
- How do you use `useEffect` to load component data every time the data key changes?
  By passing that data key as a dependency, when the key value changes it will trigger the callback function in useEffect to be executed again.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Try third-party data managment libraries such as React Query or Vercel SWR.

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
