function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let days = dezDaysList[index];
  let daysListItem = document.createElement('li');
  daysListItem.innerHTML = days;
  daysListItem.className = 'day';

  if (index - 1 === 24) {
    daysListItem.classList.add('holiday');
  }
  if (index - 1 === 25) {
    daysListItem.classList.add('holiday');
  }
  if (index - 1 === 31) {
    daysListItem.classList.add('holiday');
  }

  if (index - 1 === 4) {
    daysListItem.classList.add('friday');
  }
  if (index - 1 === 11) {
    daysListItem.classList.add('friday');
  }
  if (index - 1 === 18) {
    daysListItem.classList.add('friday');
  }
  if (index - 1 === 25) {
    daysListItem.classList.add('friday');
  }

  document.querySelector('#days').appendChild(daysListItem)
}
