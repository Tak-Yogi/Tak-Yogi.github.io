'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// document.querySelector('#pokemon-list')によって、
// HTML内のidがpokemon-listである要素を取得
const pokemonList = document.querySelector('#pokemon-list');

// 引数としてポケモンのオブジェクトを受け取り、そのポケモンのカードを作成
// カードはdiv要素で、その中にポケモンの番号('h2')、名前('h3')、タイプ('p')が表示
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    const number = document.createElement('h2');
    number.textContent = pokemon.Number;
    card.appendChild(number);

    const name = document.createElement('h3');
    name.textContent = pokemon.Name;
    card.appendChild(name);

    const types = document.createElement('p');
    types.textContent = pokemon.Types.join(', ');
    card.appendChild(types);

    // カードをクリックした際、showPokemonDetails関数を呼び出す
    card.addEventListener('click', () => {
        showPokemonDetails(pokemon);
    });

    return card;
}

// 名前のリストを取得し、それらのポケモンを取得し、
// それぞれのカードを作成し、画面に表示
function showPokemonList() {
    const names = getNames();
    for (const name of names) {
        const pokemon = getPokemonByName(name);
        const card = createPokemonCard(pokemon);
        pokemonList.appendChild(card);
    }
}

//リストを表示
showPokemonList();