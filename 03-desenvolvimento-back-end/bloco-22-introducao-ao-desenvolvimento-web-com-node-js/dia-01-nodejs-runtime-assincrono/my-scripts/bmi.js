const weightKg = 75;
const heightCm = 170;

const handleBMI = (weight, height) => {
  console.log(`BODY MASS INDEX`);
  console.log(`Weight: ${weight}`);
  console.log(`Height: ${height}`);

  const heightCalculation = (height / 100) ** 2;
  const BMI = height / heightCalculation;

  return BMI;
};

const main = () => {
  const BMI = handleBMI(weightKg, heightCm);

  console.log(`Resultado: ${BMI.toFixed(2)}`)
}

main();
