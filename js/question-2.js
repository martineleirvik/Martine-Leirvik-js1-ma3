const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const resultsContainer = document.querySelector(".results");

async function getGames() {

    const response = await fetch(url);

    const results = await response.json();

    const facts = results.all;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="results">${fatcs[i].text}<div>`;

    }

}

getGames();
