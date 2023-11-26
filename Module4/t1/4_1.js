'use strict'

const hakukentta = document.getElementById('query')
const lomake = document.getElementById('formi')


lomake.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const haku = document.querySelector(`input[id=query]`).value

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${haku}`)
        const jsonData = await response.json();
        console.log(jsonData)
    }

    catch (error) {
        console.log(error.message);
    }


}

)