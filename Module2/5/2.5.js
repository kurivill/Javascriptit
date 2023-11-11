'use strict'

const numerolista = [];

while (true) {
  let numero = +prompt(`Give me a number`)
  if (numerolista.includes(numero) === true) {
    break;
  }
  else {
    numerolista.push(numero)
  }
}

numerolista.sort((a,b) => a-b);

for (let i = 0; i < numerolista.length; i++) {
  console.log(numerolista[i])
}