# Comandos para Criação do Servidor Node.JS + Express

1. Iniciando Node
```
npm init -y
```

2. Instalando o Express
```
npm i express@4.17.1
```

3. Instalando o Linter
```
npm i eslint@6.8.0 eslint-config-trybe-backend@1.0.1 -D
```

4. Incluindo Arquivos de Configuração do Linter
__.eslintignore__
```
node_modules
```

__.eslintrc.json__
```
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
  "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}
```

5. Git Ignore
__.gitignore__
```
node_modules
```

6. Criando o Servidor
__src/app.js__
```
const express = require('express');

const app = express();

module.exports = app;
```

__src/server.js__
```
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001'));
```

__package.json__
```
// Insira estes 3 scripts, dentro da chave "scripts"

"start": "node src/server.js",
"dev": "nodemon src/server.js",
"lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."
```

7. Instalando o Nodemon
```
npm i nodemon -D
```

8. Adicionando um 'Hello, world!' na API
__src/app.js__
```
// Inserir essa linha de código antes de 'module.exports'
app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
```

