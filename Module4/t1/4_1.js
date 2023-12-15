'use strict'

const lomake = document.getElementById('formi')
const syote = document.getElementById('query')
const nappi = document.getElementById('nappi')

async function haku() {
    console.log('funktiokutsu')
    try{
        const vastaus = await fetch('https://api.tvmaze.com/search/shows');
        if (!response.ok) throw new Error('Invalid input!')
        const haku = await vastaus.json();
        console.log(haku)
    }
    catch (error) {
        console.log(error.message)
    }

}

nappi.addEventListener('click', haku);