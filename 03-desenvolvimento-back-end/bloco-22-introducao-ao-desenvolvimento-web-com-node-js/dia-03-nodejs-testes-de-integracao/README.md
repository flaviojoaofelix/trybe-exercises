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