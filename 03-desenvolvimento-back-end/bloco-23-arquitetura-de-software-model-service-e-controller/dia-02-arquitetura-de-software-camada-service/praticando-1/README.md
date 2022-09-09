# Praticando 1

Vamos começar a separar as regras de negócio do arquivo __src/app.js_, passando ele para a camada _service_.

Para isso, vamos criar um arquivo __src/services/passenger.services.js__, ficando com a seguinte estrutura de diretório:
```
.
└── src/
    ├── models/
    │   ├── connection.js
    │   └── travel.js
    ├── services/
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit
    ├── app.js
    └── server.js
```

Neste arquivo, vamos criar uma função responsável por requisitar uma _travel_ e mais algumas funções que se encontram no arquivo __src/app.js__:
__src/services/passenger.service.js__
```
// src/services/passenger.service.js

const { passengerModel, waypointModel, travelModel } = require('../models');

const isPassengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  if (passenger) return true;
  return false;
};

const saveWaypoints = (waypoints, travelId) => {
  if (waypoints && waypoints.length > 0) {
    return waypoints.map(async (value) => {
      await waypointModel.insert({
        address: value.address,
        stopOrder: value.stopOrder,
        travelId,
      });
    });
  }

  return [];
};

const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
  if (await isPassengerExists(passengerId)) {
    const travelId = await travelModel.insert({
      passengerId,
      startingAddress,
      endingAddress,
    });
   
    await Promise.all(saveWaypoints(waypoints, travelId));
    const travel = await travelModel.findById(travelId);
    return travel;
  }
};

module.exports = {
  requestTravel,
};
```