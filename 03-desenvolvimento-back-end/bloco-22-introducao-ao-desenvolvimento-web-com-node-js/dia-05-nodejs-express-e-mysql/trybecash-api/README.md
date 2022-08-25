# TrybeCash API

## Comandos de Criação
```
mkdir trybecash-api
cd trybecash-api
npm init -y
npm i -D nodemon@2.0.19
mkdir src
mkdir tests
```

## Estrutura dos Diretórios
```
.
└── trybecash-api/
    ├── src/
    │   └── 
    ├── tests/
    │   └── -
    └── package.json    
```

## Docker Compose
__docker-compose.yaml__
```
version: '3'
services:
  database:
    image: mysql:8.0.29
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: trybecashdb
    ports:
      - "3307:3306"
```

## Tabelas MySQL
![Diagrama Entidade Relacionamento (DER)](https://assets.app.betrybe.com/back-end/nodejs/express-http-with-mysql2/images/trybecash-der-acc2025b4a56888e4ecb913509d68d4a.png)
```
USE trybecashdb;

CREATE TABLE people (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL,
    phone VARCHAR(20),
    PRIMARY KEY(id),
    UNIQUE(email)
);

CREATE TABLE transactions(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    type INT NOT NULL,
    person_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_transaction_person_id FOREIGN KEY (person_id)
    REFERENCES people(id)
);

CREATE TABLE logs(
    id INT NOT NULL AUTO_INCREMENT,
    event VARCHAR(100) NOT NULL,
    timestamp BIGINT NOT NULL,
    person_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_logs_person_id FOREIGN KEY (person_id)
    REFERENCES people(id)
);
```

## Configurando o MySQL no Express
```
npm i express@4.17.1 mysql2@2.3.3
```

__src/db/connections.js__
```
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0});

module.exports = connection;
```

### Criando o App.JS
```
const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;
```

### Atualizando o Server.JS
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

## Escrevendo Testes TDD
### Instalando dependências
```
npm i mocha@10.0.0 chai@4.3.6 sinon@14.0.0 chai-http@4.3.0 -D
```

### Criando subdiretório para testes de integração
```
mkdir -p tests/integration
```

### Criando os primeiros testes
__src/tests/integration/people.test.js__
```
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de people', function () {
  it('Testando o cadastro de uma pessoa ', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: 'Luke',
          lastName: 'Skywalker',
          email: 'luke.skywalker@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
  });

  afterEach(sinon.restore);
});
```