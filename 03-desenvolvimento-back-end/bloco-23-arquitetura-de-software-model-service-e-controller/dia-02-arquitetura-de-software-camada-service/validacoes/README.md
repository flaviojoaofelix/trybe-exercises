# Validações

Vamos definir o que será retornado quando o _service_ for solicitado, que será um objeto com as chaves _type_ e _message_:
```
// src/services/passenger.service.js

//...
// const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
//   if (await isPassengerExists(passengerId)) {
//     const travelId = await travelModel.insert({
//       passengerId,
//       startingAddress,
//       endingAddress,
//     });

//     await Promise.all(saveWaypoints(waypoints, travelId));
//     const travel = await travelModel.findById(travelId);
      return { type: null, message: travel };
//   }
// };

// module.exports = {
//   requestTravel,
// }
```

Na chave _type_ indicamos o sucesso ou falha. Quando o retorno for null, indica uma requisição feita com sucesso. A resposta estará em _message_. Em caso de falha, o _type_ será definicom com um erro a _message_ com a mensagem desse erro. Assim mediamos a comunicação do serviço sempre que solicitado.

Agora vamos criar uma pasta _src/services/validations_ e nela um arquivo __schemas.js__, ficando com a seguinte estrutura:
```
.
└── src/
    ├── models/
    │   ├── connection.js
    │   └── travel.js
    ├── services/
    │   ├── validations/
    │   │   └── schemas.js
    │   └── passenger.service.js
    ├── tests/
    │   ├── integration
    │   └── unit/
    │       └── services/
    │           └── passenger.service.test.js
    ├── app.js
    └── server.js
```

Neste arquivo vamos definir os moldes dos dados que vamos receber na solicitação. Para fazer as validações desses moldes, vamos utilizar a biblioteca [Joi](https://www.npmjs.com/package/joi).

Para instalar esta biblioteca:
```
  npm install joi@17.6
```

E assim podemos utiliza-la na criação das nossas validações:
__src/services/validations/schemas.js__
```
const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const pointSchema = Joi.string().min(3).required();

const waypointSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1) });

const addRequestTravelSchema = Joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema.label('startingAddress'),
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointSchema) });

module.exports = {
  idSchema,
  addRequestTravelSchema,
};
```
💡 Para conhecer outros tipos de validação, leia a [documentação](https://joi.dev/api/?v=17.6.0) do Joi.

Agora vamos criar um arquivo __src/services/validations/validationsInputValues.js__ para reutilizar várias das validações criadas no _schemas.js_, definindo as respostas em caso de erro:
__src/services/validations/validationsInputValues.js__
```
// src/services/validations/validationsInputValues.js

const { addRequestTravelSchema } = require('./schemas');

const validateRequestTravelSchema = (passengerId, startingAddress, endingAddress, waypoints) => {
  const { error } = addRequestTravelSchema
    .validate({ passengerId, startingAddress, endingAddress, waypoints });
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateRequestTravelSchema,
};
```

Agora precisamos incluir nossas validações no arquivo _passenger.service.js_:
```
// src/services/passengers.service.js

//const { passengerModel, waypointModel, travelModel } = require('../models');
const { validateRequestTravelSchema } = require('./validations/validationsInputValues');

//const isPassengerExists = async (passengerId) => {
//  const passenger = await passengerModel.findById(passengerId);
//  if (passenger) return true;
//  return false;
//};

// const saveWaypoints = (waypoints, travelId) => {
//   if (waypoints && waypoints.length > 0) {
//     return waypoints.map(async (value) => {
//       await waypointModel.insert({
//         address: value.address,
//         stopOrder: value.stopOrder,
//         travelId,
//       });
//     });
//   }

//   return [];
// };

// const requestTravel = async (passengerId, startingAddress, endingAddress, waypoints) => {
  const validationResult = validateRequestTravelSchema(
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  );


  if (validationResult.type) return validationResult;
  
//   if (await isPassengerExists(passengerId)) {
//     const travelId = await travelModel.insert({
//       passengerId,
//       startingAddress,
//       endingAddress,
//     });

//     await Promise.all(saveWaypoints(waypoints, travelId));
//     const travel = await travelModel.findById(travelId);
//     return { type: null, message: travel };
//   }
//};

// module.exports = {
// requestTravel,
// };
```