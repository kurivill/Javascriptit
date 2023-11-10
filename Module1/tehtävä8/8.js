'use strict'

//testailua

const kohde = document.getElementById('vastaus8');



function listaitemi(aloitusvuosi) {
  const vuosiluku = document.createElement('li');
  vuosiluku.appendChild(document.createTextNode(aloitusvuosi));
  kohde.appendChild(vuosiluku);
  return;
}

function leapYearCheck(aloitusvuosi) {
  let tsekki = false
  if (aloitusvuosi % 4 === 0) {
    if (aloitusvuosi % 100 !== 0) {
      tsekki = true;
    } else if (aloitusvuosi % 100 === 0 && aloitusvuosi % 400 === 0) {
      tsekki = true;
    } else {
      tsekki = false;
    }
  } else {
    tsekki = false;
  }
  return tsekki;
}


let aloitusvuosi = +prompt('Anna aloitusvuosi')
const lopetusvuosi = +prompt('Anna lopetusvuosi')
let onko = false

while (aloitusvuosi <= lopetusvuosi) {
  onko = leapYearCheck(aloitusvuosi)
  if (onko === true) {
    listaitemi(aloitusvuosi);
  }
  aloitusvuosi++;
}


