# Type Aliases

Aplido de tipos, são utilizados para declarar a forma de um objeto, permitindo reaproveitar o tipo.
Vamos criar um _type alias_:
```
type Factors = {
  x: number;
  y: number;
}

function sum(fct: Factors) {
  console.log(`O valor da soma é: ${fct.x + fct.y}`);
}

sum({ x: 10. y: 20 });
```

### Exercícios:

1. Crie um _type_ para um objeto que represente um pássaro.
```
type Bird = {
  wings: 2;
  beaks: 1;
  biped: true;
}
```

2. Crie um _type_ que represente uma função que recebe dois valores numéricos e retorne a soma deles.
```
type Sum = (x: number, y: number) => number;
```

3. Crie um _type_ para um objeto que represente um endereço.
```
type Address = {
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
}
```

## Type Unions

É uma forma de declarar um valor que pode ter mais de um tipo. Para isso, basta declarar os tipos separados por barras:
```
function imprimirCPF(cpf: number | string) {
  console.log(`Seu CPF é: ${cpf}`);
}

imprimirCPF(11111111111); // 'Seu CPF é: 11111111111'
imprimirCPF(111.111.111-05); // 'Seu CPF é: 111.111.111-11'
```

### Exercícios

1. Crie um _type union_ que represente os estados físicos da matéria: líquido, sólido ou gasoso.
```
type StatesOfMatter = "liquid" | "solid" | "gaseous";
```

2. Crie um _type union_ que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012. 
```
type IdentifyingDocument = string | number;
```

3. Crie um _type union_ que represente sistemas operacionais: linux, mac os ou windows.
```
type SO = "linux" | "mac os" | "windows";
```

4. Crie um type union que represente as vogais do alfabeto.
```
type Vowels = "a" | "e" | "i" | "o" | "u";
```