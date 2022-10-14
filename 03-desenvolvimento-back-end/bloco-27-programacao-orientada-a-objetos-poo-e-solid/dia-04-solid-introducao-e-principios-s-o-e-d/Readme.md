# Trybe
## Módulo: Back-end
## Bloco 27 - dia 04 / Seção 09 - Dia 04
### Programação Orientada a Objetos (POO) e SOLID
### SOLID - Introdução e Princípios S, O e D


### Conteúdos

01. Introdução
02. Os princípios do SOLID
03. Single Responsibility Principle
04. Open/Closed Principle (OCP)
05. Dependency Inversion Principle
06. Exercícios
    Agora, a prática

### Exercícios
#### Agora, a prática

Antes de começarmos, vamos preparar o ambiente para a resolução dos exercícios.

_package.json_
```
{
  "name": "solid-1-exercises",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "lint": "eslint . --ext .ts"
  },
  "keywords": [
    "typescript",
    "solid",
    "refactor"
  ],
  "author": "Pessoa Estudante",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "4.17.13",
    "@types/node": "16.7.8",
    "@typescript-eslint/eslint-plugin": "4.30.0",
    "@typescript-eslint/parser": "4.30.0",
    "eslint": "7.32.0",
    "eslint-config-trybe-backend": "1.0.4",
    "eslint-plugin-import": "2.26.0",
    "eslint-plugin-mocha": "10.0.4",
    "eslint-plugin-sonarjs": "0.13.0",
    "ts-node": "10.2.1",
    "typescript": "4.4.2"
  },
  "dependencies": {
    "body-parser": "1.19.0",
    "eslint-config-trybe-backend": "1.0.4",
    "express": "4.17.1"
  }
}
```

_.eslintrc.json_
```
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "trybe-backend"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "ignorePatterns": ["tests/", "node_modules/"],
    "env": { "es2021": true },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }]
    }
}
```

_tsconfig.json_
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

_opsInfo.json_
```
{
  "createdPlants": 2
}
```

_plantsData.json_
```
[
  {
    "id": "16372398-b28f-4a39-8e67-3f6a035ee076",
    "breed": "Bromelia",
    "size": 102,
    "needsSun": false,
    "origin": "Argentina",
    "specialCare": {
      "waterFrequency": 3
    }
  },
  {
    "id": "cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770",
    "breed": "Orquidea",
    "size": 99,
    "needsSun": true,
    "origin": "Brazil"
  }
]
```

_Plants.ts_
```
// Plants.ts

import fs from 'fs/promises';

interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

interface IOpsInfo { createdPlants: number }

class Plants {
  private readonly plantsFile = 'plantsData.json';
  private readonly opsFile = 'opsInfo.json';

  public initPlant(plant: IPlant): IPlant {
    const { id, breed, needsSun, origin, specialCare, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);

    const newPlant: IPlant = {
      id,
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };

    return newPlant;
  }

  public async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public async getPlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }

  public async removePlantById(
    id: string,
  ): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const removedPlant = plants.find((plant) => plant.id === id);
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== id);
    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

    return removedPlant;
  }

  public async getPlantsThatNeedsSunWithId(
    id: string,
  ): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const filteredPlants = plants.filter((plant) =>
      plant.id === id
      && plant.needsSun
      && (!plant.specialCare
        || plant.specialCare.waterFrequency > 2));

    return filteredPlants;
  }

  public async editPlant(
    plantId: string,
    newPlant: IPlant,
  ): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });

    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
    return newPlant;
  }

  public async savePlant(
    plant: IPlant,
  ): Promise<IPlant> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const newPlant = this.initPlant({ ...plant });
    plants.push(newPlant);

    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
    createdPlants += 1;
    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
    return newPlant;
  }
}

export default Plants;
```

Agora, basta instalar as dependências:
```
npm install
```

#### Iniciando

Esse módulo controla um catálogo de plantas para um instituto de botânica. Você deverá usar o Typescript para adaptar o código de modo a transformá-lo em uma API respeitando os princípios SOLID. Para isso, você deverá modificar o arquivo _Plants.ts_, bem como criar um arquivo _index.ts_ para criar sua API com Express.

  - Foque nos princípios aprendidos hoje: _Single Responsibility_, _Dependency Inversion_ e _Open/Closed_.
  - Lembre-se de aproveitar os pilares da Orientação a Objetos quando precisar 😎

Precisamos ter os endpoints:
  - __GET__ _/plants_: retorna todas as plantas;
  - __GET__ _/plant/:id_: retorna uma planta com o id;
  - __DELETE__ _/plant/:id_: deleta uma planta com o id;
  - __POST__ _/plant/:id_: sobrescreve a planta com id; 
  - __POST__ _/plant_: cria uma planta nova;
  - __GET__ _/sunny/:id_: retorna uma planta que precisa de sol com o id.

#### Bônus

- Crie um banco de dados para persistir os dados das plantas.
- Divida a aplicação em camadas.