# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create is INSERT INTO, Read is RETURN, Update is UPDATE, and Delete is DELETE FROM.
- How do you add a row to a SQL table?
  By utilizing INSERT INTO statement w/ the values clause.
- How do you add multiple rows to a SQL table at once?
  Data rows can be batch inserted into a database table by specifying more than one tuple of values, separated by commas.
- How do you update rows in a database table?
  By utilizing the UPDATE statement w/ specified table name, values, and WHERE clause.
- How do you delete rows from a database table?
  By utilizing the DELETE FROM statement w/ a WHERE clause.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Because without the WHERE clause, ALL of the rows in the table will be affected and there is no undo.
- How do you accidentally delete or update all rows in a table?
  By omitting the WHERE clause.
- How do you get back the modified row without a separate `select` statement?
  By utilizing the RETURNING clause w/ \* or specified columns.

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
