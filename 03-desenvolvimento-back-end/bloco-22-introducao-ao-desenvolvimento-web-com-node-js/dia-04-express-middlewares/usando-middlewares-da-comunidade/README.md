# Usando middlewares da comunidade

## Pacotes

1. [Morgan](https://www.npmjs.com/package/morgan)
  - Ajuda com logs para cada requisição

2. [Cors](https://www.npmjs.com/package/cors)
  - Permite que outras aplicações front-end consumam sua API
```
npm install cors@2.8 
```

```
const cors = require('cors');
app.use(cors());
```