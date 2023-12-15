'use strict'

const lomake = document.getElementById('formi')
const syote = document.getElementById('query')
const nappi = document.getElementById('nappi')
const divi = document.getElementById('results')

async function hae(evt) {
  divi.innerHTML = ''
  evt.preventDefault();
  console.log('funktiota kutsuttu');
  const haku = syote.value;
  try{
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${haku}`);
    if (!response.ok) throw new Error('Invalid input!');
    console.log('fetch tehty');
    const tulos = await response.json();
    console.log(tulos)

    for (let i = 0; i < tulos.length; i++) {
      let artikkeli = document.createElement('article')

      let otsikkoelementti = document.createElement('h2')
      let otsikko = document.createTextNode(tulos[i].show.name)
      otsikkoelementti.appendChild(otsikko)
      artikkeli.appendChild(otsikkoelementti)

      let linkkielementti = document.createElement('a')
      linkkielementti.href = tulos[i].show.url;
      linkkielementti.target = '_blank';
      artikkeli.appendChild(linkkielementti)

      let kuvaelementti = document.createElement('img')
      if (tulos[i].show.image === null) {
        kuvaelementti.src = 'https://via.placeholder.com/210x295?text=Not%20Found'
      }
      else {
        kuvaelementti.src = tulos[i].show.image.medium
      }

      artikkeli.appendChild(kuvaelementti)


      let yhteenvetoelementti = document.createElement('div');
      yhteenvetoelementti.innerHTML = tulos[i].show.summary;
      artikkeli.appendChild(yhteenvetoelementti)

      divi.appendChild(artikkeli)

    }
  }
  catch (error){
    console.log(error.message)
  }
}

nappi.addEventListener('click', hae)