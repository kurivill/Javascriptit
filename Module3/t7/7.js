'use strict'

const teksti = document.getElementById('trigger')
const kuva = document.getElementById('target')

function korvaa(evt) {
  kuva.src = "img/picB.jpg"
  teksti.addEventListener('mouseout', takaisin)
}
function takaisin(evt) {
  kuva.src = "img/picA.jpg"
}

teksti.addEventListener('mouseover', korvaa);



