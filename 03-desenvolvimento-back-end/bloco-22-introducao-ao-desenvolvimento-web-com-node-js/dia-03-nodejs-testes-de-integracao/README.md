# Trybe
## Bloco 22 - dia 03
### Introdução ao desenvolvimento Web com Node.js
### Node.js: Testes de Integração

### Conteúdos

1. Testes não são de outros mundo!
2. Por que testar?
3. Tipos de Teste
4. Testes Automatizados
5. TDD - Desenvolvimento Orientado a Testes
6. Testes de Integração
7. Contratos de APIs
8. Definindo Cenários de Teste
9. ERscrevendo Testes
10. Construindo a API
11. Dublês de Teste
12. Finalizando a API
13. Exercícios
    - Agora a Prática
    - Bônus

### Cacao Tryber API
__cacao-trybe/__

### Exercícios
#### Agora, a prática

Clientes da nossa API Cacao Trybe querem mais informações sobre os chocolates e cabe à você como pessoa desenvolvedora de back-end, criar mais três endpoints, para isso, utilize a técnica de TDD!

__GET__ _/chocolates/total_: Quantidade total de chocolates

- Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:

__GET__ _/chocolates/total_

- Objetivo: Retornar a quantidade de tipos de chocolates que existem.
- Código HTTP: 200 - OK;
- Body (exemplo):
```
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```

1. Crie os testes de integração para o endpoint GET /chocolates/total
  - Crie um caso para o código retornado
  - Crie outro caso para o retorno esperado

__Atenção__: Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar.

2. Implemente o endpoint __GET__ _/chocolates/total_ na aplicação
Crie um novo endpoint retornando o total de chocolates na base de dados
Depois de implementar, verifique se os testes passam com sucesso

#### Bônus

__GET__ _/chocolates/search_: Pesquisa de chocolates por nome
- Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome, usando o seguinte contrato:

__GET__ _/chocolates/search?name=Mo_
- Objetivo: Retornar os chocolates que contém o termo pesquisado.
- Parâmetros de consulta (query params): name, tipo string
- Código HTTP: 200 - OK
- Body (exemplo):
```
[
  {
    "id": 3,
    "name": "Mon Chéri",
    "brandId": 2
  },
  {
    "id": 4,
    "name": "Mounds",
    "brandId": 3
  }
]
```
Caso não haja chocolates com a string passada, retorne um array vazio e status 404:

__GET__ _/chocolates/search?name=ZZZ_
- Objetivo: Retornar um array vazio quando não há chocolates que contenham o termo pesquisado.
- Parâmetros de consulta (query params): name, tipo string
- Código HTTP: 404 - Not Found
- Body (exemplo):
```
[]
```

3. Crie os testes de integração para o endpoint GET /chocolates/search
  - Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado
  - Crie um caso para quando não existirem chocolates com o nome informado
  - Verifique se os testes falham com sucesso

4. Implemente o endpoint GET /chocolates/search na aplicação
  - Crie um novo endpoint retornando os chocolates que tem a string name na base de dados
  - Depois de implementar, verifique se os testes passam com sucesso

__PUT__ _/chocolates/:id_: Atualiza um chocolate
- Esse endpoint deve atualizar um chocolate que existe na base de dados, usando o seguinte contrato:

__PUT__ _/chocolates/1_
- Objetivo: Atualizar um chocolate que existe na base de dados.
- Body da requisição (exemplo):
```
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```
- Código HTTP: 200 - OK;
- Body da resposta (exemplo):
```
{
  "chocolate": { 
    "id": 1,
    "name": "Mint Pretty Good",
    "brandId": 2
  }
}
```
- Caso não haja um chocolate com a id passada, retorne uma mensagem de erro com status 404:

__PUT__ _/chocolates/555_
- Objetivo: Retornar uma mensagem de erro quando não há um chocolate com a id passada.
- Body da requisição (exemplo):
```
{ 
  "name": "Mint Pretty Good",
  "brandId": 2
}
```
- Código HTTP: 404 - Not Found
- Body da resposta (exemplo):
```
{ 
  "message": "chocolate not found"
}
```

5. Crie os testes de integração para o endpoint PUT /chocolates/:id
  - Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado
  - Crie um caso para quando não existe chocolate com o id informado
  - Verifique se os testes falham com sucesso

6. Implemente o endpoint PUT /chocolates/:id na aplicação
  - Crie um novo endpoint que atualiza um chocolate na base de dados
  - Depois de implementar, verifique se os testes passam com sucesso