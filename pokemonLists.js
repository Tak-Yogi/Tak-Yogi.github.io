'use strict'

const pokemonList = document.querySelector('#pokemon-list');

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    const pokemonHeader = document.createElement('div');
    pokemonHeader.className = 'pokemon-header';
    card.appendChild(pokemonHeader);

    const number = document.createElement('h2');
    number.textContent = pokemon.Number;
    card.appendChild(number);

    const name = document.createElement('h3');
    name.textContent = pokemon.Name;
    card.appendChild(name);

    const pokemonImage = document.createElement('img');
    pokemonImage.src = `images/${pokemon.Number}.png`;
    pokemonImage.alt = pokemon.Name;
    card.appendChild(pokemonImage);

    const types = document.createElement('p');
    types.textContent = pokemon.Types.join(', ');
    card.appendChild(types);

    card.addEventListener('click', () => {
        showPokemonDetails(pokemon);
    });

    return card;
}

function showPokemonList() {
    getNames().forEach(name => {
        const pokemon = getPokemonByName(name);
        const card = createPokemonCard(pokemon);
        pokemonList.appendChild(card);
    });
}

showPokemonList(allPokemon);