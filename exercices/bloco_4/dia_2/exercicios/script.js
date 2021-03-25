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