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