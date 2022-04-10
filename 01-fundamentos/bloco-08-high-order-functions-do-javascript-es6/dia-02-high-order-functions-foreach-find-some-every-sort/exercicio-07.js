const books = require("./data").books;

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const authorUnique = () => books.every((book) => !books.some((bookSome) =>
    bookSome.author.birthYear === book.author.birthYear &&
    bookSome.author.name !== book.author.name
  )
);

console.log(authorUnique());
