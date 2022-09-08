# MySQL no Docker

Criando um docker-compose.yaml
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
      - "33060:3306"
```

Inicializando o container:
```
 docker-compose up -d
```