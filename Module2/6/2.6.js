function roll() {
  let heitto = Math.floor(Math.random() * 6 + 1);
  return heitto;
}

const kohde = document.querySelector('#vastaus2_6')

let heittonro = 1;
let tulos;
do {
  tulos = roll();
  let printti = `Throw number ${heittonro}, you threw a ${tulos}`;
  let listarivi = document.createElement('li');
  listarivi.appendChild(document.createTextNode(printti));
  kohde.appendChild(listarivi);
  heittonro++;
} while (tulos < 6);