'use strict'

/*Eli tällä hetkellä ongelmana on se, että nettisivu näyttää ottavan vastaan sen submitin, mutta funktio ei tunnu toimivan */

const lomake = document.getElementById('source')
const etunimi = document.querySelector(`input[name=firstname]`)
const sukunimi = document.querySelector(`input[name=lastname]`)
//const nappi = document.querySelector(`#source input[type=submit]`)
const kohde = document.getElementById('target')

lomake.addEventListener('submit', function(evt) {
    evt.preventDefault();
    ekanimi = etunimi.value;
    tokanimi = sukunimi.value;
    let teksti = `Your name is ${ekanimi} ${tokanimi}`;
    let tekstielementti = document.createTextNode(teksti);
    kohde.appendChild(tekstielementti);

    console.log(tekstielementti);
    console.log(teksti);




}
)
