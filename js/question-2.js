
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {

    const response = await fetch(url);

    const content = await response.json();

    const games = content.results;

    resultsContainer.innerHTML = "";
    

    for(let i = 0; i < games.length; i++) {
        console.log(games[i].name);
        console.log(games[i].rating);
        console.log(games[i].tags.length);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${games[i].name} ${games[i].rating} ${games[i].tags.length}<div>`;
 
    }
    }
    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError("An error occured")
    }

}

    getGames();