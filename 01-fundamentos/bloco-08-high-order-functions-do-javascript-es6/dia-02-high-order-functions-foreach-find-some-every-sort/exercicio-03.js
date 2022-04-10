const books = require('./data').books;

const getNamedBook = (size) => books.find((book) => book.name.length === size);

console.log(getNamedBook(26));