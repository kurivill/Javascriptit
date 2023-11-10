'use strict'

const heittolkm = +prompt("How many dice should I throw?");
let kirjanpito = 0;
let summa = 0;

const kohde = document.querySelector("#vastaus7");


while (kirjanpito != heittolkm) {
  let heitto = Math.floor(Math.random() * 6 + 1);
  console.log(heitto);
  summa += heitto;
  kirjanpito++;

}

kohde.innerHTML = `The sum of throws is ${summa}`



