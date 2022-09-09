# Praticando 2

Vamos criar uma nova regra de negócio, criando um novo arquivo __src/services/driver.service.js__. Nesse arquivo iremos adicionar a regra de negócios para _Buscar viagens em aberto_.
```
const { travelModel } = require('../models');

const WAITING_DRIVER = 1;
// const DRIVER_ON_THE_WAY = 2;
// const TRAVEL_IN_PROGRESS = 3;
// const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const [result] = await travelDB.findAllByStatus(WAITING_DRIVER);
  return { type: null, message: result }; 
};

module.exports = {
  getWaitingDriverTravels,
};
```

Vamos também criar um arquivo _index.js_ dentro da pasta _services_ afim de tornar mais fácil a importação/exportação dos arquivos.
__src/services/index.js__
```
const passengerService = require('./passenger.service');
const driverService = require('./driver.service');

module.exports = {
  passengerService,
  driverService,
};
```

E voltamos ao arquivo __src/app.js__ para fazer a importação desses _Services_
```
// src/app.js

const express = require('express');
const { passengerService, driverService } = require('./services');

const app = express();

app.use(express.json());

const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const travel = await passengerService.requestTravel(
    passengerId, 
    startingAddress, 
    endingAddress, 
    waypoints,
  );
  
  res.status(201).json(travel);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const result = await driverService.getWaitingDriverTravels();
  res.status(200).json(result);
});

module.exports = app;
```