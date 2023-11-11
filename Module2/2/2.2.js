'use strict'

const kohde = document.getElementById('vastauslista');

const vieraat = +prompt(`How many guests?`);

const vieraslista = [];

for (let i = 1; i <= vieraat; i++) {
  const vieras = prompt(`Name of the guest?`);
  vieraslista.push(vieras);

}

vieraslista.sort();
for (let j = 0; j < vieraslista.length; j++) {
  let listarivi = document.createElement('li');
  listarivi.appendChild(document.createTextNode(vieraslista[j]));
  kohde.appendChild(listarivi);
}

