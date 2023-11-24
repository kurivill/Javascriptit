'use strict'

const target = document.getElementById(`target`)

for (let i = 1; i <= 3; i++) {
  let listaItemi = document.createElement(`li`)
  target.appendChild(listaItemi)
}

const toka = document.getElementsByTagName('li')[1];
toka.classList.add('my-item');