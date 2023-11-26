'use strict'

/* Kokeillaan jossain kohtaa sitä yhtä näppärää kikkaa p-elementin täyttämiseksi. */

const lomake = document.getElementById('source')
const etunimi = document.querySelector(`input[name=firstname]`)
const sukunimi = document.querySelector(`input[name=lastname]`)
//const nappi = document.querySelector(`#source input[type=submit]`)
const kohde = document.getElementById('target')

lomake.addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    let teksti = `Your name is ${etunimi.value} ${sukunimi.value}`;
    let tekstielementti = document.createTextNode(teksti);
    kohde.appendChild(tekstielementti);

    console.log(tekstielementti);
    console.log(teksti);




}
)
