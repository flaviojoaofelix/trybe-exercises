const readline = require('readline-sync');
const bmiTable = require('./bmiTable');

const handleBMI = (weight, height) => {
  console.log(`BODY MASS INDEX`);
  console.log(`Weight: ${weight}`);
  console.log(`Height: ${height}`);

  const heightCalculation = (height / 100) ** 2;
  const BMI = weight / heightCalculation;

  return BMI;
};

const handleTableResult = (bmi) => {
  const possibilities = Object.keys(bmiTable);

  const result = possibilities.find((possibility) => {
    const { maxBMI, minBMI } = bmiTable[possibility];

    return bmi >= minBMI && bmi <= maxBMI;
  });

  return result;
};

const main = () => {
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');

  const BMI = handleBMI(weight, height);
  const BMITableResult = handleTableResult(BMI);

  console.log(`IMC: ${BMI.toFixed(2)} - ${BMITableResult}`);
}

main();
