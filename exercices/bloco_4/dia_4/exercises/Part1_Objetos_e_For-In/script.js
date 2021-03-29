let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

////////////////////////////////////////////////////////

console.log('1. Bem-vinda, ' + info.personagem + '.');

////////////////////////////////////////////////////////

info.recorrente = 'Sim';

console.log('2.' + info);

////////////////////////////////////////////////////////

for(let key in info) {
  console.log('3.' + key);
};

////////////////////////////////////////////////////////

for(let key in info) {
  console.log('4.' + info[key])
}