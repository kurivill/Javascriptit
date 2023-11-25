'use strict'

const ekainput = document.getElementById('num1')
const tokainput = document.getElementById('num2')
const valikko = document.getElementById('operation')
const nappi = document.getElementById('start')

nappi.addEventListener('click', function(){

  let numero1 = parseFloat(ekainput.value);
  let numero2 = parseFloat(tokainput.value);
  const valikonarvo = valikko.value
  const kohde = document.getElementById('result')
  let tulos = 0
  let tekstinode = ''

  switch (valikonarvo) {
    case 'add':
      tulos = numero1+numero2
      tekstinode = document.createTextNode(tulos.toString())
      kohde.appendChild(tekstinode)
      break

    case 'sub':
      tulos = numero1-numero2
      tekstinode = document.createTextNode(tulos.toString())
      kohde.appendChild(tekstinode)
      break

    case 'div':
      tulos = numero1/numero2
      tekstinode = document.createTextNode(tulos.toString())
      kohde.appendChild(tekstinode)
      break


    case 'multi':
      tulos = numero1*numero2
      tekstinode = document.createTextNode(tulos.toString())
      kohde.appendChild(tekstinode)
       break
  }

})

















