let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

////////////////////////////////////////////////////////

console.log('1. Bem-vinda, ' + info.personagem + '.');

////////////////////////////////////////////////////////

info.recorrente = 'Sim';

console.log(info);

////////////////////////////////////////////////////////

for(let key in info) {
  console.log('3.' + key);
};

////////////////////////////////////////////////////////

for(let key in info) {
  console.log('4.' + info[key])
}

////////////////////////////////////////////////////////

let info2 = {
  personagem: 'Margarida e Tio Patinhas',
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas',
  recorrente: 'Ambos recorrentes'
}

for(let key in info2) {
  console.log('5.' + info2[key])
}