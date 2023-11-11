'use strict'
const numerot = [];

while (true) {
  let vastaus = +prompt(`Give me a number`);

  if (vastaus === 0) {
    break;
  }
  else {
    numerot.push(vastaus);
  }
}

numerot.sort((a,b) => b-a);

for (let i = 0; i < numerot.length; i++) {
  console.log(numerot[i])
}