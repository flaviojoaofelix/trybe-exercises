# Definindo os Cenários de Teste
## API Cacao Trybe

A API Cacao Trybe será composta por três endpoints, representados pelos seguintes contratos:

1. GET __/chocolates__
  - Objetivo: Retornar uma lista com todos os chocolates cadastrados.
  - Código HTTP: 200 - OK;
  - Body (exemplo):
```
  [
    { "id": 1, "name": "Mint Intense", "brandId": 1 },
    { "id": 2, "name": "White Coconut", "brandId": 1 },
    { "id": 3, "name": "Mon Chéri", "brandId": 2 },
    { "id": 4, "name": "Mounds", "brandId": 3 }
  ]
```

2. GET __/chocolates/:id__
  - Objetivo: Buscar um chocolate específico pelo ID.
  - Código HTTP: 200 - OK;
  - Body (exemplo):
```
  [        
    {
      "id": 4,
      "name": "Mounds",
      "brandId": 3
    }
  ]
```

3. GET __/chocolates/brand/:brandId__
  - Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
  - Código HTTP: 200 - OK;
  - Body (exemplo):
```
  [
    {
        "id": 1,
        "name": "Mint Intense",
        "brandId": 1
    },
    {
        "id": 2,
        "name": "White Coconut",
        "brandId": 1
    }
  ]
```