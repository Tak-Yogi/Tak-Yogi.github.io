'use strict'
// 1行目に記載している 'use strict' は削除しないでください


// allPokemon: すべてのポケモンの情報が格納
// pokemon: 

// 関数 getNames:
// データ中のすべてのポケモンの名前を要素に持つ配列を返す、
/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */
function getNames() {
    const names = allPokemon.map(pokemon => pokemon.Name);
    return names;
}



// 関数 getPokemonByName
// 与えられた名前を持つポケモンのオブジェクトを返す
/**
 * @param {string} name - ポケモンの名前
 * @returns {object} 与えられた名前を持つポケモンのオブジェクト
 */
function getPokemonByName(name) {
    const pokemon = allPokemon.find(pokemon => pokemon.Name === name);
    return pokemon;
}



// 関数 filterByType
// 特定のタイプのポケモンだけを抽出する関数
function filterByType(pokemon, type) {
    return pokemon.Types.includes(type);
}



// 関数 getResistantPokemonNames
// 引数に文字列 attack （技）を取る
// この関数は与えられた attack に耐性のある
// すべてのポケモンの名前が入った配列を返す。 
/**
 * @param {string} attack（技）
 * @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
 */
function getResistantPokemonNames(attack) {
    const resistantPokemon = getResistantPokemon(attack);
    const names = resistantPokemon.map(pokemon => pokemon.Name);
    return names;
}
// test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);




// 関数 getWeaknessCounts
// weakness（弱点）をキー、
// その弱点を持つポケモンの数を値とするオブジェクトを返す、
/**
 * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
 */
function getWeaknessCounts() {
    const weaknessCounts = {};
    allPokemon.forEach(pokemon => {
        pokemon.Weaknesses.forEach(weakness => {
            if (weaknessCounts[weakness]) {
                weaknessCounts[weakness]++;
            } else {
                weaknessCounts[weakness] = 1;
            }
        });
    });
    return weaknessCounts;
}
// test(getWeaknessCounts(), getWeaknessCountsExpected);