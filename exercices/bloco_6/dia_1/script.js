const comboBoxStates = document.getElementById('comboBoxStates');

const brazilStates = [
  'Acre',
  'Alagoas',
  'Amapa',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
];

for (let index = 1; index < brazilStates.length; index += 1) {
  let element = document.createElement('option');
  element.innerText = brazilStates[index];
  comboBoxStates.appendChild(element);
};
