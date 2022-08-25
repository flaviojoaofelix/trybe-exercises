# Middlewares
## Para Fixar

1. 🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.
```
const existingId = (req, res, next) => {
  const { id } = req.params.id;

  if (teams.some((team) => team.id === Number(id))) { 
    next();
  } else {
    res.sendStatus(404);
  }
};

app.get('teams/:id', existingId, (req, res) => {
  res.json(team);
});
```

2. 🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.
```
app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params.id;

  const team = teams.find((currentTeam) => currentTeam.id === Number(id));
  const i = teams.indexOf(team);
  teams.splice(i, 1, updatedTeams);

  res.status(201).json(updatedTeams);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const { id } = req.params.id;

  const team = teams.find((currentTeam) => currentTeam.id === Number(id));
  const i = teams.indexOf(team);
  teams.splice(i, 1);

  res.sendStatus(200);
});
```

3. 🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js, mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.
__src/middlewares/validateTeam.js__
```
const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

module.exports = validateTeam;
```

__src/app.js__
```
const validateTeam = require('./middleware/validateTeam');
```
