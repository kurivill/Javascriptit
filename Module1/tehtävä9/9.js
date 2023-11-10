'use strict'


let indeksi = 2;
const tavoite = +prompt("Give me a number");
let tsekattava = 0;
let eiole = false;


while (indeksi < tavoite) {
  tsekattava = tavoite / indeksi;
  if (Number.isInteger(tsekattava) === true)
    eiole = true;
  indeksi++;

}

if (eiole === true) {
  document.querySelector("#vastaus9").innerHTML = `
  The number is not a prime number`
}

else {
  document.querySelector("#vastaus9").innerHTML = `
  The number is a prime number`
}