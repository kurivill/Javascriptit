'use strict'

/*function concat(lista) {

  let sana;
  let yhdistelma = '';
  for (let i = 0; i < lista.length; i++) {
    sana = lista[i];
    yhdistelma += sana;
  }
  return yhdistelma;
}*/
function concat(kohde) {
  let sana = '';
  sana = kohde;
  yhdistelma += sana
}
let yhdistelma = '';
const sanalista = ['Johnny', 'Deedee', 'Joey', 'Marky']
sanalista.forEach(concat)



//const sanalista = ['Johnny', 'Deedee', 'Joey', 'Marky']
const kohde = document.querySelector('#vastaus2_8');

//const teksti = concat(sanalista);

kohde.innerHTML = yhdistelma;

