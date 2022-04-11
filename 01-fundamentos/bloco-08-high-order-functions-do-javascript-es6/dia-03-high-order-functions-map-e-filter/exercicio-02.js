var assert = require("assert");
const books = require("./data").books;

// Questão 02
const expectedResult = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];

const nameAndAge = () =>
  books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);

assert.deepStrictEqual(nameAndAge(), expectedResult);
