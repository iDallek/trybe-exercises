let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let arrayCount = 0;

for(let index = 0; index < numbers.length; index += 1) {
  arrayCount += numbers[index];
}

console.log(arrayCount);

let arrayArithmeticAverage = arrayCount / numbers.length

console.log(arrayArithmeticAverage);

if(arrayArithmeticAverage > 20){
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

let arrayHighestNumber = 0;

for(let index = 0; index < numbers.length; index += 1) {
  let arrayNumber = numbers[index];
  if(arrayNumber > arrayHighestNumber){
    arrayHighestNumber = arrayNumber;
  } else {}
}

console.log(arrayHighestNumber)

// Ficando horas tentando resolver e só agora ví que era numeros impares ao envez de numeros primos (Não quero apagar mesmo que não tenha conseguido concluir).

/*
let quantityOfPrimeNumbers = 0;

for(let index = 0; index < numbers.length; index += 1) {
  let arrayNumber = numbers[index];
  let isPrimeNumber;
  for(let i = 2; i < arrayNumber; i += 1) {
    if(arrayNumber % i === 0){
      isPrimeNumber = true;
    } else {
      isPrimeNumber = false;
    }
  }
  if(isPrimeNumber === true){
    quantityOfPrimeNumbers +=1;
  } else {} 
}

console.log('A quantidade de numeros primos são:', quantityOfPrimeNumbers);
*/

let quantityOfOddNumbers = 0;

for(let i = 0; i < numbers.length; i += 1){
  let arrayNumber = numbers[i];
  if(arrayNumber % 2 != 0){
    quantityOfOddNumbers += 1
  } else {}
}

if(quantityOfOddNumbers === 0){
  console.log('Nenhum valor ímpar encontrado.')
}

console.log('A quantidade de números ímpares são:', quantityOfOddNumbers);

let arrayLowestNumber = Infinity;

for(let index = 0; index < numbers.length; index += 1) {
  let arrayNumber = numbers[index];
  if(arrayNumber < arrayLowestNumber){
    arrayLowestNumber = arrayNumber;
  } else {}
}

console.log(arrayLowestNumber)

let arrayExercise = [];
let number = 0;

for(let i = 0; i < 25; i += 1){
  number += 1;
  arrayExercise.push(number);
}

console.log(arrayExercise)