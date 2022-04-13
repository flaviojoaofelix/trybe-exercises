var assert = require("assert");
const books = require("./data").books;

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

const longestNamedBook = () => books.reduce((acc,book) => {
  if (book.name.length > acc.name.length) acc = book;
  return acc;
});

assert.deepStrictEqual(longestNamedBook(), expectedResult);
