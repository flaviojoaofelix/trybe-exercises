# Testes automatizados
## Ferramentas

Para implementar testes no back-end vamos utilizar a dupla [Mocha](https://mochajs.org/) e [Chai](https://www.chaijs.com/)

```
npm install -D mocha@10.0.0 chai@4.3.6
```

### Exemplo de Utilização do Mocha:

```
describe('Quando a média for menor que 7', function () {
  //
});
```

⚠️ Utilizamos a sintaxe function ao invés de arrow functions como boa práticas para testes no Mocha pois ele pode depender de informações durante os testes que não estarão disponíveis com o uso de arrow functions.

```
describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    //
  });
});
```

### Exemplo de Utilização do Chai:

```
const { expect } = require('chai');
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovação');
```

⚠️ a asserção equals é uma das diversas asserções do chai. Veja a [documentação completa](https://www.chaijs.com/api/bdd/) para mais!


[Getters](https://www.chaijs.com/api/bdd/#method_language-chains) estéticos encadeáveis para realizar uma leitura mais fluída do teste:
```
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});
```