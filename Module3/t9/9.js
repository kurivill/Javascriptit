'use strict';

const lasku = document.getElementById('calculation');
const nappi = document.getElementById('start');
const kohde = document.getElementById('result');

nappi.addEventListener('click', function() {
  let operaattori = '';
  let ekaluku = '';
  let tokaluku = '';
  let indeksi = 0;
  let tulosteksti = '';

  const syote = lasku.value;
  const lista = syote.split('');

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] !== '+' && lista[i] !== '-' && lista[i] !== '*' && lista[i] !==
        '/') {
      ekaluku += lista[i];
    } else {
      operaattori = lista[i];
      indeksi = i + 1;
      break;

    }
  }

  for (let j = indeksi; j < lista.length; j++) {
    tokaluku += lista[j];
  }

  let tulos = 0

  switch(operaattori) {
    case '+':
      tulos = parseInt(ekaluku) + parseInt(tokaluku)
      tulosteksti = document.createTextNode(tulos.toString())
      kohde.appendChild(tulosteksti)
      break

    case '-':
      tulos = parseInt(ekaluku) - parseInt(tokaluku)
      tulosteksti = document.createTextNode(tulos.toString())
      kohde.appendChild(tulosteksti)
      break

    case '*':
      tulos = parseInt(ekaluku) * parseInt(tokaluku)
      tulosteksti = document.createTextNode(tulos.toString())
      kohde.appendChild(tulosteksti)
      break

    case '/':
      tulos = parseInt(ekaluku) / parseInt(tokaluku)
      tulosteksti = document.createTextNode(tulos.toString())
      kohde.appendChild(tulosteksti)
      break

  }

})


/*const lista = testiluku.split('');

for (let i = 0; i < lista.length; i++) {
  if (lista[i] !== '+' && lista[i] !== '-' && lista[i] !== '*' && lista[i] !==
      '/') {
    ekaluku += lista[i];
  } else {
    operaattori = lista[i];
    indeksi = i + 1;
    break;

  }
}

for (let j = indeksi; j < lista.length; j++) {
  tokaluku += lista[j];
}

console.log(testiluku);
for (let x = 0; x < lista.length; x++) {
  console.log(lista[x]);
}
console.log('eka luku: ' + ekaluku);
console.log('operaattori: ' + operaattori);
console.log('toka luku: ' + tokaluku);

/*
Eli tehdään niin, että splitataan kaikki merkit omaan listaan
Järjestellään ne niinkuin suunniteltiin, eli että listaan jää vain
matemaattinen operaattori, ja numerot menee omaan listaan
Pitää vaan tehdä niin, että kun tulee jotain muuta kuin numero, niin se
for-looppi pitää varmaan lopettaa ja aloittaa alusta. Eli varmaan, että
else, ja sitten uusi for loop, paitsi että tällä kertaa se alkaa tokasta indeksistä

TÄmän jälkeen on siis se matemaattinen operaattori omassa listassa, ja
molemmat numerot omassa
Sitten varmaan helvetin iso if-elseif-lause, jossa sen matemaattisen operaattorin
perusteella ekaksi numerolistojen characterit yhdeksi string


Uusi suunnitelma
Käydään läpi sitä splitattua merkkijonoa. Kun tulee eteen matemaattinen operaattori, niin
Sen perusteella jotenkin yhdistetään

For-loop
merkki != + or - or / or *
lisätään tyhjään stringiin se merkki
Sitten kun tulee se operaattori, niin tallenetaan se operaattori muuttujaan

Sitten vaan elseifin jälkeen sisään uusi for-looppi, joka jatkaa
 */

/*const formi = document.getElementById('calculation')
const nappi = document.getElementById('start')
const kohde = document.getElementById('result')

nappi.addEventListener('click', function() {
  const lista = formi.value.split('');
  const numerot = [];
  for (let j = 0; j<lista.length; j++) {
    console.log(lista[j])
  }
  for (let i = 0; i<lista.length; i++) {
    let numero = parseInt(lista[i])
    if (isNaN(numero)===false) {
      numerot.push(numero)
      lista.splice(i,1)
      i--;
    }


    }

  console.log('alla numerolistan sisältö')

    for (let x = 0; x<numerot.length; x++) {
      console.log(numerot[x])
    }

    console.log('alla muut')

    for (let y = 0; y<lista.length; y++) {
      console.log(lista[y])
    }






})




/*
const numerot = [];

const testiteksti = '9+2'

const lista = testiteksti.split('')


for (let i = 0; i<lista.length; i++) {
  let numero = parseInt(lista[i])
  if (isNaN(numero)===false) {
    numerot.push(numero)
  }
}
for (let i = 0; i<numerot.length; i++) {
  console.log(numerot[i])
}
*/

//var teksti = '12+98'

//lista.forEach((element) => console.log(element))



