import readline from 'readline-sync';

import * as Length from './length';
import * as Mass from './mass';
import * as Capacity from './capacity';
import * as Area from './area';
import * as Volume from './volume';

const conversions: string[] = ['Length', 'Mass', 'Capacity', 'Area', 'Volume']

const units: { [key: string]: string[] } = {
  length: ["km", "hm", "dam", "m", "dm", "cm", "mm"],
  mass: ["kg", "hg", "dag", "g", "dg", "cg", "mg"],
  capacity: ["kl", "hl", "dal", "l", "dl", "cl", "ml"],
  area: ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"],
  volume: ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"],
};

function convert(type: string, value: number, fromUnit: string, toUnit: string): number {
  let result: number = 0;

  switch(type.toLowerCase()) {
    case 'length': {
      result = Length.convert(value, fromUnit, toUnit)
      break;
    }
    case 'mass': {
      result = Mass.convert(value, fromUnit, toUnit);
      break;
    }
    case 'capacity': {
      result = Capacity.convert(value, fromUnit, toUnit);
      break;
    }
    case 'area': {
      result = Area.convert(value, fromUnit, toUnit);
      break;
    }
    case 'volume': {
      result = Volume.convert(value, fromUnit, toUnit);
      break;
    }
  }

  return result;
}

function exec() {
  const typeIndex = readline.keyInSelect(conversions, 'Escolha o tipo de conversão');
  const typeChoice = conversions[typeIndex]

  const value = readline.questionFloat('Digite o valor a ser convertido:');
  const fromUnitChoiceIndex = readline.keyInSelect(units[typeChoice.toLowerCase()], 'Escolha uma unidade inicial:');
  const toUnitChoiceIndex = readline.keyInSelect(units[typeChoice.toLowerCase()], 'Escolha uma unidade para conversão:');

  const fromUnitChoice = units[typeChoice.toLowerCase()][fromUnitChoiceIndex];
  const toUnitChoice = units[typeChoice.toLowerCase()][toUnitChoiceIndex];

  const result = convert(typeChoice, value, fromUnitChoice, toUnitChoice);
  const message = `A conversão de ${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();