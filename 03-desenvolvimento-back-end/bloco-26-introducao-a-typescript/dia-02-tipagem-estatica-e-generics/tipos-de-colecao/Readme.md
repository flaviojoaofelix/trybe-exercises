# Tipos de coleção

## Arrays

São um conjunto de valores de mesmo tipo. Para declará-los você pode adicionar o tipo esperado com a sintaxe _let_:
```
let fruits: string[] = ['Apple', 'Banana', 'Grape'];
```

## Tuplas

Permitem declarar um cojunto de valores cuja ordem e tipo não são fixas. Em JavaScript são representadas como arrays (por isso são semelhantes), mas tem estrutura diferentes.

Um exemplo é que você pode ter um par de _string_ e um _número_:
```
let lastName: [string, string] = ['Machado', 'Félix'];
let person: [string, number] = ['Flávio João', 37];
let car: [string, string, number] = ['Kwid', 'Duster', 2];
```
