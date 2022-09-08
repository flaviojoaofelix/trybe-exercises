# Refatorando uma Aplicação

Vamos analisar o código do endpoint:
  - __POST__ _/passengers/:passengerId/request/travel_
__src/app.js__
```
...
...
...

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const {
    startingAddress,
    endingAddress,
    waypoints,
  } = req.body;

  if (isPassengerExists(passengerId)) {
    const [resultTravel] = await connection.execute(
      `INSERT INTO travels 
          (passenger_id, starting_address, ending_address) VALUE (?, ?, ?)`,
      [
        passengerId,
        startingAddress,
        endingAddress,
      ],
    );
    await Promise.all(saveWaypoints(waypoints, resultTravel.insertId));

    const [[response]] = await connection.execute(
      'SELECT * FROM travels WHERE id = ?',
      [resultTravel.insertId],
    );
    res.status(201).json(camelize(response));
    return;
  }

  res.status(500).json({ message: 'Ocorreu um erro' });
});

...
...
...
```

Com a divisão do código em camadas, iremos resolver uma série de problemas que podem acontecer pelo fato do código ser escrito de forma unificada.

Vamos começar então a refatorar o código e aplicar a camada _Model_.