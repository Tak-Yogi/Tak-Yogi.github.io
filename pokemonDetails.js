'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const pokemonDetails = document.querySelector('#pokemon-details');
const overlay = document.querySelector('#overlay');

function showPokemonDetails(pokemon) {
    pokemonDetails.innerHTML = '';
    pokemonDetails.classList.remove('hidden');
    overlay.classList.remove('hidden');

    const name = document.createElement('h2');
    name.textContent = pokemon.Name;
    pokemonDetails.appendChild(name);

    const number = document.createElement('p');
    number.textContent = `Number: ${pokemon.Number}`;
    pokemonDetails.appendChild(number);

    const generation = document.createElement('p');
    generation.textContent = `Generation: ${pokemon.Generation}`;
    pokemonDetails.appendChild(generation);

    const about = document.createElement('p');
    about.textContent = pokemon.About;
    pokemonDetails.appendChild(about);

    const types = document.createElement('p');
    types.textContent = `Types: ${pokemon.Types.join(', ')}`;
    pokemonDetails.appendChild(types);

    const resistant = document.createElement('p');
    resistant.textContent = `Resistant: ${pokemon.Resistant.join(', ')}`;
    pokemonDetails.appendChild(resistant);

    const weaknesses = document.createElement('p');
    weaknesses.textContent = `Weaknesses: ${pokemon.Weaknesses.join(', ')}`;
    pokemonDetails.appendChild(weaknesses);

    const fastAttacks = document.createElement('ul');
    fastAttacks.textContent = 'Fast Attack(s):';
    for (const attack of pokemon['Fast Attack(s)']) {
        const li = document.createElement('li');
        li.textContent = `${attack.Name} (${attack.Type}) - ${attack.Damage}`;
        fastAttacks.appendChild(li);
    }
    pokemonDetails.appendChild(fastAttacks);

    const specialAttacks = document.createElement('ul');
    specialAttacks.textContent = 'Special Attack(s):';
    for (const attack of pokemon['Special Attack(s)']) {
        const li = document.createElement('li');
        li.textContent = `${attack.Name} (${attack.Type}) - ${attack.Damage}`;
        specialAttacks.appendChild(li);
    }
    pokemonDetails.appendChild(specialAttacks);

    const table = document.createElement('table');
    const tr1 = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = 'Max CP';
    tr1.appendChild(th1);
    const td1 = document.createElement('td');
    td1.textContent = pokemon.MaxCP;
    tr1.appendChild(td1);
    table.appendChild(tr1);

    const tr2 = document.createElement('tr');
    const th2 = document.createElement('th');
    th2.textContent = 'Max HP';
    tr2.appendChild(th2);
    const td2 = document.createElement('td');
    td2.textContent = pokemon.MaxHP;
    tr2.appendChild(td2);
    table.appendChild(tr2);

    const tr3 = document.createElement('tr');
    const th3 = document.createElement('th');
    th3.textContent = 'Weight';
    tr3.appendChild(th3);
    const td3 = document.createElement('td');
    td3.textContent = `${pokemon.Weight.Minimum} - ${pokemon.Weight.Maximum}`;
    tr3.appendChild(td3);
    table.appendChild(tr3);

    const tr4 = document.createElement('tr');
    const th4 = document.createElement('th');
    th4.textContent = 'Height';
    tr4.appendChild(th4);
    const td4 = document.createElement('td');
    td4.textContent = `${pokemon.Height.Minimum} - ${pokemon.Height.Maximum}`;
    tr4.appendChild(td4);
    table.appendChild(tr4);

    const tr5 = document.createElement('tr');
    const th5 = document.createElement('th');
    th5.textContent = 'Buddy Distance';
    tr5.appendChild(th5);
    const td5 = document.createElement('td');
    td5.textContent = pokemon['Buddy Distance'];
    tr5.appendChild(td5);
    table.appendChild(tr5);

    const tr6 = document.createElement('tr');
    const th6 = document.createElement('th');
    th6.textContent = 'Base Stamina';
    tr6.appendChild(th6);
    const td6 = document.createElement('td');
    td6.textContent = pokemon['Base Stamina'];
    tr6.appendChild(td6);
    table.appendChild(tr6);

    const tr7 = document.createElement('tr');
    const th7 = document.createElement('th');
    th7.textContent = 'Base Attack';
    tr7.appendChild(th7);
    const td7 = document.createElement('td');
    td7.textContent = pokemon['Base Attack'];
    tr7.appendChild(td7);
    table.appendChild(tr7);

    const tr8 = document.createElement('tr');
    const th8 = document.createElement('th');
    th8.textContent = 'Base Defense';
    tr8.appendChild(th8);
    const td8 = document.createElement('td');
    td8.textContent = pokemon['Base Defense'];
    tr8.appendChild(td8);
    table.appendChild(tr8);

    const tr9 = document.createElement('tr');
    const th9 = document.createElement('th');
    th9.textContent = 'Base Flee Rate';
    tr9.appendChild(th9);
    const td9 = document.createElement('td');
    td9.textContent = pokemon['Base Flee Rate'];
    tr9.appendChild(td9);
    table.appendChild(tr9);

    pokemonDetails.appendChild(table);



    if (pokemon['Next Evolution Requirements']) {
        const nextEvolutionRequirements = document.createElement('p');
        nextEvolutionRequirements.textContent = `Next Evolution Requirements: ${pokemon['Next Evolution Requirements'].Amount} ${pokemon['Next Evolution Requirements'].Name}`;
        pokemonDetails.appendChild(nextEvolutionRequirements);
    }

    if (pokemon['Next evolution(s)']) {
        const nextEvolutions = document.createElement('ul');
        nextEvolutions.textContent = 'Next evolution(s):';
        for (const evolution of pokemon['Next evolution(s)']) {
            const li = document.createElement('li');
            li.textContent = `${evolution.Number} - ${evolution.Name}`;
            nextEvolutions.appendChild(li);
        }
        pokemonDetails.appendChild(nextEvolutions);
    }



    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', hidePokemonDetails);
    pokemonDetails.appendChild(closeButton);
}

function hidePokemonDetails() {
    pokemonDetails.classList.add('hidden');
    overlay.classList.add('hidden');
}

overlay.addEventListener('click', hidePokemonDetails);