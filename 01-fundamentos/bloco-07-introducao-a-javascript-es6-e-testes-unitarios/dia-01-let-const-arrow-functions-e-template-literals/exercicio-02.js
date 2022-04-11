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

// Questão 02

const longWord = (text) => {
  let arr = text.split(' ');
  let long = 0
  let word = '';

  for (i = 0; i < arr.length; i += 1) {
    if (arr[i].length > long ) {
      long = arr[i].length;
      word = arr[i];
    }
  }

  return word;
};

console.log(longWord("Antonio foi no banheiro e não sabemos o que aconteceu"));