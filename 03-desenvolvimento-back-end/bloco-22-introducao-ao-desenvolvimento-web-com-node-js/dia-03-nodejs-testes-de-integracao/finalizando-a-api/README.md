# Finalizando a API

Vamos dar continuidade ao desenvolvimento obsevando os demais contratos da nossa API:

1. GET __/chocolates/:id__
  - Objetivo: Buscar um chocolate específico pelo ID.
  - Código HTTP: 200 - OK
  - Body (exemplo):
```
  [        
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

2. GET __/chocolates/brand/:brandId__
  - Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
  - Código HTTP: 200 - OK
  - Body (exemplo):
```
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]
```

Começamos pela defininção dos cenários de teste para cada contrato:
__tests/integration/chocolates.test.js__

```
//describe('Testando a API Cacao Trybe', function () {

//...

describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal([
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }]);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });
//});
```

Como podemos observar, os teste falham ao ser executados. Com isso, iremos construir as rotas para cada cenário de teste: <br />
__src/app.js__
```
// src/app.js

//const express = require('express');
//const cacaoTrybe = require('./cacaoTrybe');

//const app = express();

//app.get('/chocolates', async (req, res) => {
//  const chocolates = await cacaoTrybe.getAllChocolates();
//  res.status(200).json({ chocolates });
//});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

//module.exports = app;
```

E então as funções que vão fornecer as respostas para cada rota:
__src/cacaoTrybe.js__
```
// src/cacaoTrybe.js

//const fs = require('fs').promises;
//const { join } = require('path');

//const readCacaoTrybeFile = async () => {
//  const path = '/files/cacaoTrybeFile.json';
//  try {
//    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
//    return JSON.parse(contentFile);
//  } catch (error) {
//    return null;
//  }
//};

//const getAllChocolates = async () {
//  const cacaoTrybe = await readCacaoTrybeFile();
//  return cacaoTrybe.chocolates;
//};

const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

//module.exports = {
//  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
//};
```

Assim, rodamos o teste novamente e dessa vez tudo é validado com sucesso!