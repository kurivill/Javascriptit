'use strict'

function even(numero) {
  if (numero % 2 === 0) {
    parilliset.push(numero)
  }
}

const aloitus = [3, 7, 9, 4, 2, 6, 10, 1];
const parilliset = [];

aloitus.forEach(even)
console.log(aloitus)
console.log(parilliset)

