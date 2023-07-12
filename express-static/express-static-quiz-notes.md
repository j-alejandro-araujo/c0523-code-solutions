# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  It allows you to specify a directory on your server from which static files such as HTML, JS, CSS, and images can be served. The middleware automatically handles responds to requests for those static files.
- What does `express.static()` return?
  It returns a middleware function (object) that can be used in an Express application.
- What are several examples of static files?
  HTML, JS, CSS, Images,
- What is a good way to serve application images using Express?
  By utilizing express static middleware ex: "app.use(express.static('images'))"

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
