'use strict'

const nimi = prompt("Mikä on nimesi?")

const tupanumero = Math.floor(Math.random() * 4 + 1);

const rohkelikko = 1;
const luihuinen = 2;
const puuskupuh = 3;
const korpinkynsi = 4;
const vastaus = document.querySelector("#printti");

switch (tupanumero) {
  case 1:
    vastaus.innerHTML = `Olet Rohkelikko`;
    break;

  case 2:
    vastaus.innerHTML = `Olet Luihuinen`;
    break;

  case 3:
    vastaus.innerHTML = `Olet Puuskupuh`;
    break;

  case 4:
    vastaus.innerHTML = `Olet Korpinkynsi`;
    break;

}