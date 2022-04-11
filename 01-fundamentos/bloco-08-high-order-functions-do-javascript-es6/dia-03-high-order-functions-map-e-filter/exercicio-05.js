var assert = require("assert");
const books = require("./data").books;

// Questão 05
const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

const fantasyOrScienceFictionAuthors = (genresArray) =>
  books
    .filter((book) => genresArray.includes(book.genre))
    .map((book) => book.author.name)
    .sort();

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(["Fantasia", "Ficção Científica"]), expectedResult);
