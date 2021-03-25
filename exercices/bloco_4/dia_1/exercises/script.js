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

let triangleAngleA = 27;
let triangleAngleB = 54;
let triangleAngleC = 99;

let isTriangle;

if(triangleAngleA + triangleAngleB + triangleAngleC === 180){
  isTriangle = true;
  console.log(isTriangle);
} else {
  isTriangle = false;
  console.log(isTriangle);
};

let chessPiece = 'Reai'

chessPiece = chessPiece.toLowerCase()

switch(chessPiece){
  case 'rei':
    console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;
  case 'rainha':
    console.log('A rainha (ou dama) move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
  case 'dama':
    console.log('A dama (ou rainha) move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
  case 'bispo':
    console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
  case 'cavalo':
    console.log('O cavalo é a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
  case 'torre':
    console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;
  case 'peão':
    console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;
  default: 
    console.log('ERRO: Peça não identificada.')
} 

let studentGradeNumber = 27;
let studentGradeLetter;

if(studentGradeNumber > 100 || studentGradeNumber < 0){
  console.log('ERRO: Nota inválida.');
} else if(studentGradeNumber >= 90){
  studentGradeLetter = 'A';
  console.log('Nota do aluno:', studentGradeLetter + '.');
} else if(studentGradeNumber >= 80){
  studentGradeLetter = 'B';
  console.log('Nota do aluno:', studentGradeLetter + '.');
} else if(studentGradeNumber >= 70){
  studentGradeLetter = 'C';
  console.log('Nota do aluno:', studentGradeLetter + '.');
} else if(studentGradeNumber >= 60){
  studentGradeLetter = 'D';
  console.log('Nota do aluno:', studentGradeLetter + '.');
} else if(studentGradeNumber >= 50){
  studentGradeLetter = 'E';
  console.log('Nota do aluno:', studentGradeLetter + '.');
} else {
  studentGradeLetter = 'F';
  console.log('Nota do aluno:', studentGradeLetter + '.');
};

let numberCheck1 = 27;
let numberCheck2 = 54;
let numberCheck3 = 72;

let numbersCheckedOneIsEven;

if(numberCheck1 % 2 > 0 && numberCheck2 % 2 > 0 && numberCheck3 % 2 > 0){
  numbersCheckedOneIsEven = false;
  console.log(numbersCheckedOneIsEven);
} else {
  numbersCheckedOneIsEven = true;
  console.log(numbersCheckedOneIsEven);
};

if(numberCheck1 % 2 === 0 && numberCheck2 % 2 === 0 && numberCheck3 % 2 === 0){
  numbersCheckedOneIsEven = false;
  console.log(numbersCheckedOneIsEven);
} else {
  numbersCheckedOneIsEven = true;
  console.log(numbersCheckedOneIsEven);
};