# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component is first rendered by React.
- What is a React Effect?
  Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. It allows you to perform side effects such as fetching data.
- When should you use an Effect and when should you not use an Effect?
  Use: when you need to perform side effects after rendering.
  Not Use: if we don't need a side effect or the side effect depends on a componenent's props or state that already trigger a re-render.
- When do Effects run?
  After the component has been rendered and the DOM has been updated.
- What function is used to declare an Effect?
  useEffect();
- What are Effect dependencies and how do you declare them?
  They are values that effect depends on to control how the effect should run. Dependencies are declared as the second argument to the useEffect hook inside an array.
- Why would you want to clean up from an Effect?
  To stop side effects that are no longer needed and prevent unexpected errors.
- How do you clean up from an Effect?
  By returning a cleanup function from the effect callback.
- When does the cleanup function run?
  Every time before your effect runs again and one time when the component unmounts.

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
