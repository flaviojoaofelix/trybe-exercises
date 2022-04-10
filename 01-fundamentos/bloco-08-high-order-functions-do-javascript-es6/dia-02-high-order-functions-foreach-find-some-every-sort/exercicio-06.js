const books = require('./data').books;

const someBookWasReleaseOnThe80s = () => books.some((book) =>
  book.releaseYear > 1979 && book.releaseYear < 1990
);

console.log(someBookWasReleaseOnThe80s());