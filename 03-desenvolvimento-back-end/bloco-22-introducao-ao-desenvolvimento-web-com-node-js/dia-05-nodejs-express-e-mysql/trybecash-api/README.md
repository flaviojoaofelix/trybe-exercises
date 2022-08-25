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