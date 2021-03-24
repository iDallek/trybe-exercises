let a = 27;
let b = 54;

let soma;
soma = a + b;
console.log('Resultado da soma é',soma + '.');

let subtracao;
subtracao = a - b;
console.log('Resultado da subtração é:',subtracao + '.');

let multiplicacao;
multiplicacao = a * b;
console.log('Resultado da multiplicação é:',multiplicacao + '.');

let divisao;
divisao = a / b;
console.log('Resultado da divisão é:',divisao + '.');

let modolo;
modolo = a % b;
console.log('Resultado da módolo é:',modolo + '.');

let num1 = 72;
let num2 = 45;

if(num1 > num2){
  console.log('O maior número representa a váriavel num1:',num1 + '.');
} else {
  console.log('O maior número representa a váriavel num2:',num2 + '.');
};

let num3 = 27.54;

if(num1 > num2 && num1 > num3){
  console.log('O maior número representa a váriavel num1:',num1 + '.');
} else if(num2 > num1 && num2 > num3){
  console.log('O maior número representa a váriavel num2:',num2 + '.');
} else if(num3 > num1 && num3 > num2){
  console.log('O maior número representa a váriavel num3:',num3 + '.');
} else {
  console.log('Erro: Não foi possivel verificar qual o maior número.');
};

let number = -27;

if(number > 0){
  console.log('positive');
} else if(number < 0){
  console.log('negative')
} else {
  console.log('zero')
}