# Introdução ao MySQL
## Criando TrybeCash API

```
mkdir trybecash-api
cd trybecash-api
npm init -y
npm i -D nodemon@2.0.19
mkdir src
mkdir tests
```

Após a execução dos comandos, vamos ter a seguinte estrutura de diretório:
```
.
└── trybecash-api/
    ├── src/
    │   └── 
    ├── tests/
    │   └── -
    └── package.json
```

Adicionando o Nodemon no __package.json__
```
{
// ...
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
// ...
}
```