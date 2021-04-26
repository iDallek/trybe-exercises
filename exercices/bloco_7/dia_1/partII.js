//Exercício 1
let num = 12;

const toFactorial = num => {
  let factorialResult = num;
  for (let number = num - 1; number >= 1; number -= 1) {
    factorialResult = factorialResult * number;
  }
  return factorialResult
}

console.log(`O fatorial de ${num}! é: ${toFactorial(num)}`);
