# Classes

No TS, classes são uma maneira de definir um objeto. Uma classes pode ser considerada com um projeto para criação de um objeto. Uma classe _Person_, por exemplo, descre atributos de uma pessoa: nome, data de nascimento, idade, etc. Mas, também descreve ações que uma pessoa pode executar: falar, comer, andar.

Porém, a classe _Person_ é apenas um plano de criação de uma pessoa. Devemos criar instâncias da classe, antes dela se tornar um objeto para que possamos atribuir os valores de cada propriedade, como definir a idade por exemplo, ou chamar uma ação, como falar.

```
class Person {
  name: string;
  birthDate: Date;
  age: number;

  constructor(name: string, birthDate: Date, age: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} acabou de falar algo`);
  }

  eat(): void {
    console.log(`${this.name} acabou de comer algo`);
  }

  walk(): void {
    console.log(`${this.name} acabou de caminhar`);
  }
}
```

Agora podemos reutilizar a classe _Person_ para criar qualquer quantidade de 'Pessoas', cada uma com suas próprias características:
```
const person1 = new Person('Flávio', new Date('1985-06-11'), 37);
const person2 = new Person('Nicolle', new Date('1984-10-26'), 37);

console.log(person1);
person1.speak();
// Person: {
//   "name": "Flávio",
//   "birthDate": "1985-06-11T00:00:00.000Z",
//   "age": 37
// }
// "Flávio acabou de falar algo"

console.log(person2);
person2.walk();
// Person: {
//   "name": "Nicolle",
//   "birthDate": "1984-10-26T00:00:00.000Z",
//   "age": 37
// }
// "Nicolle acabou de caminhar"
```

É possível dizer que uma das propriedades da classe não é obrigatória, basta utilizar o caractere _?_, levando ela a se tornar uma _union type_, entre seu tipo original e _undefined_.
```
class Person {
  name: string;
  birthDate: Date;
  age?: number;

  constructor(name: string, birthDate: Date, age: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} acabou de falar algo`);
  }

  eat(): void {
    console.log(`${this.name} acabou de comer algo`);
  }

  walk(): void {
    console.log(`${this.name} acabou de caminhar`);
  }
}
```

### Exercícios

1. Crie uma _classe_ cujo objeto represente um Cachorro.
```
class Dog {
  name: string;
  breed: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this._name = name;
    this._color = color;
    this._age = age;
  }

  bark(): void {
    console.log(`${this._name} barked`);
  }
}
```

2. Crie uma _classe_ cujo objeto represente uma Casa.
```
class House {
  owner: string;
  address: string;
  area: number;
  color: string;

  constructor(owner: string, address: string, area: number, color: string) {
    this._owner: owner;
    this._address: address;
    this._area: area;
    this.color: color;
  }
}
```


3. Crie uma _classe_ cujo objeto represente um Voo. 
```
class Flight {
  origin: string;
  destination: string;
  departure: Date;
  arrival: Date;
  passengers: number;

  constructor(origin: string, destination: string, departure: Date, arrival: Date, passagenrs: number) {
    this._origin = origin;
    this._destination = destination;
    this._departure = departure;
    this._arrival = arrival;
    this._passengers = passengers;
  }
}
```
