const books = require('./data').books;

const booksOrderedByReleaseYearDesc = () => books.sort((a,b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc());