'use strict'

function roll(sides) {
  return Math.floor(Math.random() * sides + 1);
}

const kohde = document.querySelector('#vastaus2_7');

const sivut = +prompt(`How many sides in your dice?`);

let heittonro = 1;
let tulos;
do {
  tulos = roll(sivut);
  let printti = `Throw number ${heittonro}, you threw a ${tulos}`;
  let listarivi = document.createElement('li');
  listarivi.appendChild(document.createTextNode(printti));
  kohde.appendChild(listarivi);
  heittonro++;
} while (tulos < sivut);