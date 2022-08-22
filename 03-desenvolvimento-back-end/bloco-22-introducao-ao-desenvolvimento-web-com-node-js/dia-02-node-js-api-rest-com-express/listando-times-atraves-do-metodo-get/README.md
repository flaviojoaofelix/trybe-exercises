# Listando times através do método GET
## Para Fixar

1. Que tal treinar seus conhecimentos e listar um time pelo seu id. Crie um endpoint do tipo GET com a rota /teams/:id.

```
app.get('/teams/:id', (req, res) => {
  const team = teams.find((team) => team.id === Number(req.params.id));

  res.status(200).json(team);
});
```