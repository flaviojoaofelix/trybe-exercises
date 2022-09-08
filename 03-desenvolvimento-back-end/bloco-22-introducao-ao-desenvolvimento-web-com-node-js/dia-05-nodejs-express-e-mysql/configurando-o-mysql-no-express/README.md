# Configurando o MySQL no Express

No diretório raiz do projeto:
```
 npm i express@4.17.1 mysql2@2.3.3
```

__src/db/connection.js__
```
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0});

module.exports = connection;
```

Estrutura de arquivos após as últimas criações:
```
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   └── server.js
    ├── tests/
    │   └── -
    ├── docker-compose.yaml
    └── package.json
```

__src/app.js__
```
const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;
```

__src/server.js__
```
const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  }

});
```
💡 As funções dentros do app.listen foram criadas temporariamente apenas para testar a conexão com o banco!

Vamos refatorar nosso __src/server.js__
```
const app = require('./app');

const port = 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
});
```

E assim vamos ter a seguinte estrutura de diretório:
```
.
└── trybecash-api/
    ├── src/
    │   ├── db/
    │   │   └── connection.js
    │   ├── app.js
    │   └── server.js
    ├── tests/
    │   └── -
    ├── docker-compose.yaml
    └── package.json
```