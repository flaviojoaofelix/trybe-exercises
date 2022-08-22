# Trybe
## Bloco 22 - dia 02
### Introdução ao desenvolvimento Web com Node.js
### Node.js: API REST com Express

### Conteúdos

1. Como iniciamos a construção de qualquer coisa?
2. Meu primeiro servidor Node.js
3. Express
4. Abrindo nossa API pro mundo com Endpoints
5. 'Hello, world!' na nossa API
6. Listando times através do método GET
7. E essa tal arquitetura REST
8. Em suma

### Exercícios
#### Agora, a prática

1. Para que é usado o código de status 400 e 422?
```
- Status 400: Bad Request - O servidor não entendeu a requisição / Sintaxe inválida.
- Status 422: Unprocessable Entity: A requisição está inabilitada para seguir devido a erros semânticos.
```

2. Para que é usado o código de status 401?
```
- Status 401: Unauthorized/Unauthenticated: Necessita de autenticação para obter a resposta.
```

```
const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];
```

3. 🚀 Crie um servidor Node.js utilizando o framework Express
4. 🚀 Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id
5. 🚀 Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array
6. 🚀 Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades