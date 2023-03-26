'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// データ中のすべてのポケモンの名前を要素に持つ配列を返す、関数 getNames
/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */
function getNames() {
    const names = allPokemon.map(pokemon => pokemon.Name);
    return names;
}


// 与えられた名前を持つポケモンのオブジェクトを返す、関数 getPokemonByName
/**
 * @param {string} name - ポケモンの名前
 * @returns {object} 与えられた名前を持つポケモンのオブジェクト
 */
function getPokemonByName(name) {
    const pokemon = allPokemon.find(pokemon => pokemon.Name === name);
    return pokemon;
}
