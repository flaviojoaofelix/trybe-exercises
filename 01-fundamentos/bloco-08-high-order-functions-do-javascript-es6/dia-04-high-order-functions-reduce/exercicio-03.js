var assert = require("assert");
const books = require("./data").books;

const expectedResult = 43;

const year = new Date().getFullYear();

const averageAge = () => {
  const sum = books.reduce((acc, book) => acc += book.releaseYear - book.author.birthYear, 0);
  return sum / books.length;
}

assert.deepStrictEqual(averageAge(), expectedResult);

