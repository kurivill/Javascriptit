'use strict'

const vuosiluku = +prompt(`Anna vuosiluku`)


if (vuosiluku % 4 === 0) {
  if (vuosiluku % 100 !== 0) {
    document.querySelector("#vastaus").innerHTML = `Vuosi on karkausvuosi`
  }
  else if (vuosiluku % 100 === 0 && vuosiluku % 400 === 0) {
    document.querySelector("#vastaus").innerHTML = `Vuosi on karkausvuosi`
  }
  else {
    document.querySelector("#vastaus").innerHTML = `Vuosi ei ole karkausvuosi`
  }
}
else {
  document.querySelector("#vastaus").innerHTML = `Vuosi ei ole karkausvuosi`
}
 /*
if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || (vuosiluku % 4 === 0 && vuosiluku % 400 === 0)) {
  document.querySelector("#vastaus").innerHTML = `Vuosi on karkausvuosi`
}

else {
  document.querySelector("#vastaus").innerHTML = `Vuosi ei ole karkausvuosi`
} */