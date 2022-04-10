const books = require('./data').books;

// - Retorne o nome do livro de menor nome.

const smallerName = () => {
  let nameBook;
  // escreva aqui o seu código
  books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length) nameBook = book.name;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
};

console.log(smallerName());