# Interfaces

A _inteface_ é uma estrutura do TypeScript que é utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos e comport tipos de objetos nomeados existentes em objetos novos.

Vamos a um exemplo de pessoa funcionária:
```
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

A _interface_ não incializa nem implementa as propriedades declaradas nela, pois o único trabalho da _interface_ é descrever o objeto.
```
let employee = Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return this.firstName + " " + this.lastName; // Aqui o this é usado para acessar as propriedades da própria _interface_
  }
}

employee.firstName = 10; // Aqui teremos um erro já que um número não é uma string.
```

Uma _interface_ pode _estender_ de outra _interface_, permitindo complementar as propriedades de uma interface com as propriedades de outra:
```
interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
};
```
Agora vamos crirar o objeto do tipo _Teacher_:
```
let teacher: Teacher = {
  firstName: "Flávio",
  lastName: "Félix",
  subject: "Back-end",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName} e leciono ${this.subject}`;
  }
}
```

### Exercícios

1. Crie uma _interface_ cujo objeto represente um Automóvel.
```
interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}
```

2. Crie uma _interface_ cujo objeto represente um Felino.
```
interface Feline {
  name: string;
  subfamilies: string;
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}
```

3. Crie uma _interface_ cujo objeto represente uma Aeronave.
```
interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}
```