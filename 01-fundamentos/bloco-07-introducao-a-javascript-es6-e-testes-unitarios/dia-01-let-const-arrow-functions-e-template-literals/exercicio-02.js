// Questão 01

const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
};

console.log(factorial(10));

// Questão 01 - Bônus - Recursiva

const recursiveFactorial = (number) => number > 1 ? number * recursiveFactorial(number - 1) : 1;
console.log(recursiveFactorial(10));