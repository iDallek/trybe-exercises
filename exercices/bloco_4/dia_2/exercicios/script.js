let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

let arrayCount = 0;

for(let index = 0; index < numbers.length; index += 1) {
  arrayCount += numbers[index];
}

console.log(arrayCount);

let arrayArithmeticAverage = arrayCount / numbers.length

console.log(arrayArithmeticAverage);
