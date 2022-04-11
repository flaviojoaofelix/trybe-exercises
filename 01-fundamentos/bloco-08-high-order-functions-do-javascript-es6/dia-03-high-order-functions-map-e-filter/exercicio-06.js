var assert = require("assert");
const books = require("./data").books;

const expectedResult = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

const year = new Date().getFullYear();

const oldBooks = (age) =>
  books
    .filter((book) => year - book.releaseYear > age)
    .map((book) => book.name);

assert.deepStrictEqual(oldBooks(60), expectedResult);
