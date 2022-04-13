var assert = require("assert");

const expectedResult = 20;

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = () =>
  names.reduce((acc, name) => {
    acc += name.replace(/[^aA]/g, "").length;
    return acc;
  }, 0);

assert.deepStrictEqual(containsA(), expectedResult);
