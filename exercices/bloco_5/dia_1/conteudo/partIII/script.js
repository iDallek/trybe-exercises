let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = 'green';

let emergencyTasks = document.querySelectorAll('.emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  emergencyTasks[i].style.backgroundColor = 'lightcoral'
}

let emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i <= emergencyTasks.length; i += 1) {
  emergencyTasksTitle[i].style.backgroundColor = 'purple'
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');
for (let i = 0; i < emergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.backgroundColor = 'yellow'
}

let noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i <= emergencyTasks.length; i += 1) {
  noEmergencyTasksTitle[i].style.backgroundColor = 'black'
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = 'darkgreen'