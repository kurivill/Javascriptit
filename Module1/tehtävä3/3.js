'use strict'

const eka = +prompt("Give the first number");
const toka = +prompt("Give the second number");
const kolmas = +prompt("Give the third number");

const vastauskenttä = document.querySelector("#printti");
vastauskenttä.innerHTML = `Sum of given numbers: ${eka + toka + kolmas}<br>`;
vastauskenttä.innerHTML += `Product of given numbers: ${eka * toka * kolmas}<br>`;
vastauskenttä.innerHTML += `Average of given numbers: ${(eka + toka + kolmas) / 3}`;