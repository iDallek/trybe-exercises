//Base do exercício 1
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//Resolução do exercício 1
const testingScope2 = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  //console.log(`${ifScope} o que estou fazendo aqui? :O`);
}

testingScope2(false);

//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Source link: https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958
const sortOddsAndEvens = (arr) => arr.sort((a,b) => a-b );

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);
