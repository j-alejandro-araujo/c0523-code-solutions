const booksArray = [
  {
    isbn: '1000',
    title: 'Ready Player One',
    author: 'Ernest Cline',
  },
  {
    isbn: '1001',
    title: "Old Man's War",
    author: 'John Scalzi',
  },
  {
    isbn: '1002',
    title: 'The Haar',
    author: 'David Sodergren',
  },
];

console.log('typeOf:', typeof booksArray, 'booksArray value:', booksArray);

const sJsonBooksArray = JSON.stringify(booksArray);

console.log(
  'typeOf:',
  typeof sJsonBooksArray,
  'value of JSON stringify:',
  sJsonBooksArray
);

const string = '{"number": "003", "name": "John"}';

console.log('typeOf:', typeof string, 'string value:', string);

const jsonParse = JSON.parse(string);

console.log('typeOf:', typeof jsonParse, 'jsonParse value:', jsonParse);
