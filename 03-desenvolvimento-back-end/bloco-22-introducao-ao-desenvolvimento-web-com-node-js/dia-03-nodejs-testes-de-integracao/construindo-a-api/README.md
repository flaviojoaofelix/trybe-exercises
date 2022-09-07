# Construindo a API

Criar o arquivo app.js
```
.
├── src/
│   └── app.js
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json
```

Instalar o Express
```
npm install express@4.17.1
```

__app.js__
```
// src/app.js

const express = require('express');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;
```

__tests/integration/chocolates.test.js__
```
const app = require('../../src/app');
```

💡 Se rodar o teste nesse momento, ele vai continuar falhando. Isso se deve ao fato de ainda não termos construído a função _getAllChocolates()_ na rota _GET /chocolates_

Com isso, vamos criar os arquivos e função necessários:

__src/files/cacaoTrybeFile.json__
```
{
    "brands": [
        {
            "id": 1,
            "name": "Lindt & Sprungli"
        },
        {
            "id": 2,
            "name": "Ferrero"
        },
        {
            "id": 3,
            "name": "Ghirardelli"
        }
    ],
    "chocolates": [
        {
            "id": 1,
            "name": "Mint Intense",
            "brandId": 1
        },
        {
            "id": 2,
            "name": "White Coconut",
            "brandId": 1
        },
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
}
```

Estrutura de Arquivos
```
.
├── src/
│   ├── files/
│   │   └── cacaoTrybeFile.json
│   ├── app.js
│   └── cacaoTrybe.js
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json
```

__src/cacaoTrybe.js__
```
const fs = require('fs').promises;
const { join } = require('path');

const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

module.exports = {
    getAllChocolates,
};
```

Precisamos importar o arquivo cacaoTrybe.js no arquivos de rotas _app.js_
```
const cacaoTrybe = require('./cacaoTrybe');
```

E assim, ao executar nosso teste, dessa vez ele vai passar!