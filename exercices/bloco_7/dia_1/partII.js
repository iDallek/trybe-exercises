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

//Exercício 2
const longestWord = str => {
  let strSplit = str.split(' ');

  let longestWord = strSplit.sort((a, b) => b.length - a.length);

  return longestWord[0]
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))
