const readline = require('readline-sync');

const handleBMI = (weight, height) => {
  console.log(`BODY MASS INDEX`);
  console.log(`Weight: ${weight}`);
  console.log(`Height: ${height}`);

  const heightCalculation = (height / 100) ** 2;
  const BMI = weight / heightCalculation;

  return BMI;
};

const main = () => {
  const weight = readline.questionInt('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');

  const BMI = handleBMI(weight, height);

  console.log(`Resultado: ${BMI.toFixed(2)}`)
}

main();
