'use strict'

/* Eli aloitetaan tekemällä ne funktiot, joilla tehdään laskutoimitukset.
Mietitään se parametrien käyttö jo siihen valmiiksi.
Tehdään myös se return-arvon palautus siihen p-elementtiin.
Vaikein kohta tulee olemaan saada ne syötteet sieltä
 */
/*
function summaa(ekaluku, tokaluku) {
  let summa = ekaluku + tokaluku
  return summa

}

function erotus(ekaluku, tokaluku) {
  let erotus = ekaluku - tokaluku;
  return erotus;

}

function jako(ekaluku, tokaluku) {
  let tulo = ekaluku * tokaluku;
  return tulo;

}

function kerto(ekaluku, tokaluku) {
  let asd = ekaluku / tokaluku;
  return asd;

}*/
document.addEventListener("DOMContentLoaded", function() {
const ekainput = document.getElementById('num1')
const tokainput = document.getElementById('num2')
const valikko = document.getElementById('operation')
const nappula = document.getElementById('start')
nappula.addEventListener('click', function() {
  const luku1 = parseFloat(ekainput.value)
  const luku2 = parseFloat(tokainput.value)
  let tulos = 0;

  const valikonarvo = valikko.value

  switch (valikonarvo) {
    case 'add':
      console.log(luku1 + luku2)
      break;

    case 'sub':
      tulos = luku1 - luku2
      console.log(tulos)
      break;

    case 'multi':
      tulos = luku1 * luku2
      console.log(tulos)
      break;

    case 'div':
      tulos = luku1 / luku2
      console.log(tulos)
      break;
  }
})
})

/*const valikonarvo = valikko.value
let tulos = 0




}

console.log(ekaluku)
console.log(tokaluku)
console.log(tulos)*/










