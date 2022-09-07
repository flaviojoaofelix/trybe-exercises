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

9. Adicionando Array de dados ao app.js
__src/app.js
```
// src/app.js

// const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// ...
```

10. Cadastrando times através do método POST
__src/app.js__
```
// src/app.js

// ...

// app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// module.exports = app;
```

11. Cadastrando o time com Thunder Client
```
{
  "id": 3,
  "name": "Clube de Regatas do Flamengo",
  "initials": "FLA"
}
```

  1. Podemos preencher com a URL da nossa aplicação, esta é a mesma que estamos usando no navegador;
  2. Podemos escolher o método de envio, observer que tem vários, já aprendemos alguns e outros ainda vamos ver. Neste caso pode escolher o método do tipo POST;
  3. Lembra que queremos enviar os dados pelo corpo da requisição? Então aqui pode escolher Body.
  4. Quando optamos pela opção Body, isso nos habilita escolher o formato de envio! Existem vários também, mas agora vamos optar por JSON.
  5. Após escolher o formato em que vamos enviar nossos dados, podemos escrevê-lo em formato JSON no campo abaixo.

12. Preparando a API para receber dados
__src/app.js__
```
// src/app.js

// ...

// const app = express();

app.use(express.json());

// ...
```

13. Incluindo opção para edição de dados através do PUT
__src/app.js__
```
// src/app.js

// ...

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

// ...
```

14. Deletando através do método DELETE
__src/app.js__
```
// src/app.js

// ...

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

// ...
```