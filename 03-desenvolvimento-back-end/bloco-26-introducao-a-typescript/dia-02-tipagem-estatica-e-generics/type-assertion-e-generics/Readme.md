# Type Assertion e Generics

## Type Assertion (as Type)

Por exemplo, a seguir temos uma função que converte _string_ para _json_. Por ser muito genérica, a tipagem que a função retorna é desconhecida (_unknown_), mas observando o código dá para notar na _string_ a ser convertida qual estrutura será retornada depois que a função for executada. Sendo assim, podemos forçar um tipo específico para aquele objeto e continuar aproveitando os recursos do TypeScript:
```
type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}

// função que converte de string para json
function stringToJson(str: string): unknown {
  const result = JSON.parse(str);
  return result;
}

// utilizando o "as" para converter de unknown para User
const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User

// Outra forma de usar o Assertion. A sintaxe é diferente mas tem o mesmo objetivo
const address = <Address> stringToJson('{"street":"Rua Tamarindo","number":1}')

user.name;
address.street;
```