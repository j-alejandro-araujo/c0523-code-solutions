# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To be utilized as a debugging tool.
- What is a "model"?
  Data structures used to define the shape of our data.
- Which "document" is being referred to in the phrase Document Object Model?
  The HTML documnent loaded in the web browser.
- What is the word "object" referring to in the phrase Document Object Model?
  Every element, attribute, and text node in the HTML document is considered an object in the DOM.
- What is a DOM Tree?
  A representation of the HTML document as a tree structure of tags.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector() and getElementById()
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll()
- Why might you want to assign the return value of a DOM query to a variable?
  For efficiency and accuracy.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  It allows the page to load faster before any of the JS loads.
- What does `document.querySelector()` take as its argument and what does it return?
  selectors (a string containing one or more selectors) and it returns an element object representing the first element in the document tht matches the specified selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  selectors (a string containing one or more selectors) and it returns a non-live nodelist containing one element object for each element that matches.

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
