// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => apeendJoke(response.joke))
};

const apeendJoke = (joke) => {
  const p = document.createElement('p');
  const body = document.querySelector('body');

  p.innerText = joke;
  body.appendChild(p);
}

window.onload = () => fetchJoke();