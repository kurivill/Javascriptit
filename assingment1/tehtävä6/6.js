'use strict'

let vastaus = false;

vastaus = confirm(`Should I calculate the square root?`)

if (vastaus === true) {
  const luku = +prompt("Give me a number");

  console.log(luku);
  if (luku < 0) {
    document.querySelector("#vastaus6").innerHTML = `
      Can't calculate square root of a negative number`
  }

  else {
    const vastaus = luku ** 0.5;
    console.log(vastaus);
    document.querySelector("#vastaus6").innerHTML = `
    Square root is ${vastaus}` }
}

else {
  document.querySelector("#vastaus6").innerHTML = `not calculated`
}
