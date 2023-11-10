'use strict'

const noppalkm = +prompt(`Give the amount of dice`)
const tavoite = +prompt(`What are you trying to throw?`)

let heitot = 0;
let oikein = 0;

while (heitot < 10000) {
  let summa = 0;
  for (let i = 1; i <= noppalkm; i++) {
    let heitto = Math.floor(Math.random() * 6 + 1);


    summa = summa + heitto;

  }

  if (summa === tavoite) {
    oikein++;

  }
  heitot++;

}




const osuus = (oikein / 10000) * 100;
document.querySelector("#vastaus10").innerHTML = `
the probability to hit your target is ${osuus}%`
