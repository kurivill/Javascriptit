'use strict'

const lomake = document.getElementById('formi')
const syote = document.getElementById('query')
const nappi = document.getElementById('nappi')


async function haku(evt) {
  const haku = syote.value
  evt.preventDefault()
  try{
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${haku}`);
    if (!response.ok) throw new Error('Invalid input!')
    console.log("fetchi tehty");
    const tulos = await response.json();
    console.log(response)
    console.log('alle tulee tulos')
    console.log(tulos)

  }
  catch (error){
    console.log(error.message)
  }
  finally{
    console.log('valmis')
  }
}

nappi.addEventListener('click', haku);

// action="https://api.tvmaze.com/search/shows"