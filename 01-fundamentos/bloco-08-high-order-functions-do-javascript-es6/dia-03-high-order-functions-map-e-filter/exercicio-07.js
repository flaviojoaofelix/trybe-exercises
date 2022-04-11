var assert = require("assert");
const books = require("./data").books;

// Questão 07
const expectedResult = "O Senhor dos Anéis";

const authorWith3DotsOnName = () =>
  books.find(
    (book) =>
      book.author.name.split(' ').filter((word) => word.endsWith('.'))
        .length === 3
  ).name;

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
