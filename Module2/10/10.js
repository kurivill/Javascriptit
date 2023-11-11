'use strict'

const ehdokasmaara = +prompt(`How many candidates are there?`);
const ehdokkaat = [];

for (let i = 1; i <= ehdokasmaara; i++) {
  let nimi = prompt('Enter the name of the candidate')
  let ehdokas = {
    ehdokasnimi: nimi,
    aanet: 0,
  }
  ehdokkaat.push(ehdokas)
}

console.log(ehdokkaat)

const aanimaara = +prompt('How many voters')

for (let j = 0; j < aanimaara; j++) {
  let aani = prompt(
      'Vote for your candidate, you can also press enter to cast an empty vote')
  for (let x = 0; x < ehdokkaat.length; x++) {
    if (ehdokkaat[x].ehdokasnimi === aani) {
      ehdokkaat[x].aanet++;
    }
  }
}

console.log(`Voting has concluded`)

ehdokkaat.sort((a, b) => b.aanet - a.aanet)


console.log(`The winner of the vote is ${ehdokkaat[0].ehdokasnimi} with
 ${ehdokkaat[0].aanet} votes`)

for (let y = 0; y < ehdokkaat.length; y++) {
  console.log(`Candidate name: ${ehdokkaat[y].ehdokasnimi}, votes: ${ehdokkaat[y].aanet}`)
}



