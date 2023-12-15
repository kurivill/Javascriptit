'use strict'

const lomake = document.getElementById('formi')
const syote = document.getElementById('query')
const nappi = document.getElementById('nappi')
const divi = document.getElementById('results')
async function vitsinhaku(evt) {
  try{
    evt.preventDefault()
    console.log('funktio käynnissä')
    const haku = syote.value
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${haku}`);
    const tulos = await response.json();
    for (let i = 0; i < tulos.result.length; i++) {
      let artikkelielementti = document.createElement('article')
      let pelementti = document.createElement('p')
      let teksti = document.createTextNode(tulos.result[i].value)
      pelementti.appendChild(teksti)
      artikkelielementti.appendChild(pelementti)
      divi.appendChild(artikkelielementti)

    }

  }
  catch (error){
    console.log(error.message)
  }
}

nappi.addEventListener('click', vitsinhaku)