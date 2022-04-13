var assert = require("assert");
const books = require("./data").books;

const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () =>
  books.reduce((acc, book, index) => {
    if (index === books.length - 1) {
      acc += `${book.author.name}.`;
    } else {
      acc += `${book.author.name}, `;
    }
    return acc;
  }, ``);

assert.deepStrictEqual(reduceNames(), expectedResult);
