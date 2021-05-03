/* 
  Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const checkNumbers = (myNum, num) => {
  return myNum === num ? 
  `Parabéns você ganhou!

Número jogado: ${myNum}
Número sortiado: ${num}` : 

  `Tente novamente.
  
Número jogado: ${myNum}
Número sortiado: ${num}`;
}

const prizeDraw = (prizeNumber, callback) => {
  const numberDrawn = Math.floor(Math.random() * 5) + 1;
  
  return callback(prizeNumber, numberDrawn);
}

console.log(prizeDraw(5, checkNumbers));
