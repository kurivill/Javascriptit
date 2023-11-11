'use strict'

const koiralista = [];

const kohde = document.getElementById('vastaus2_3')

for (let i = 1; i <= 6; i++) {
  let koira = prompt(`Give me a name of the dog`)
  koiralista.push(koira);
}
koiralista.sort();
koiralista.reverse();

for (let j = 0; j < 6; j++) {
  let listarivi = document.createElement('li')
  listarivi.appendChild(document.createTextNode(koiralista[j]))
  kohde.appendChild(listarivi)
}