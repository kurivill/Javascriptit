'use strict'

const numerot = [];
for (let i = 1; i <= 5; i++) {
  let numero = +prompt(`Give me a number`);
  numerot.push(numero);

}

for (let j = 4; j >= 0; j--) {
  console.log(numerot[j]);
}