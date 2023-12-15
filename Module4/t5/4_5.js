'use strict'

async function vitsinhaku() {
  try{
    console.log('funktio käynnissä')
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const tulos = await response.json();
    console.log(tulos)
    console.log(tulos.value)

  }
  catch (error){
    console.log(error.message)
  }
}

vitsinhaku()