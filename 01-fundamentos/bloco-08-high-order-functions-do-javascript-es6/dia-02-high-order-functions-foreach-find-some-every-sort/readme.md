# Trybe - Exercícios
## Bloco 08 - dia 02
### Higher Order Functions do JavaScript ES6
### JJavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

### Exercícios

Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals , objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

Utilize seguinte código como template para realizar os exercícios:
_data.js_
```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```

#### Exercício 01
_exercicio-01.js_

- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  - Dica: use a função find.

```
function authorBornIn1947() {
  // escreva aqui o seu código
}
```

#### Exercício 02
_exercicio-02.js_

- Retorne o nome do livro de menor nome.
  - Dica: use a função forEach.

```
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
```

#### Exercício 03
_exercicio-03.js_

- Encontre o primeiro livro cujo nome possui 26 caracteres.

```
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
}
```

#### Exercício 04
_exercicio-04.js_

- Ordene os livros por data de lançamento em ordem decrescente.

```
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}
```

#### Exercício 05
_exercicio-05.js_

- Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

```
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}
```

#### Exercício 06
_exercicio-06.js_

- Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

```
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}
```

#### Exercício 07
_exercicio-07.js_

- Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

```
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}
```