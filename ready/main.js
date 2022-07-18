
import * as PokeModule from './pokemon.js';

import * as lib from './lib.js';


let pokemon;


document.getElementById('submit').addEventListener('click', async () => {
    event.preventDefault();

    const name = document.getElementById('name').value;

    try {
        pokemon = new PokeModule.Pokemon(name);
        const isExists = pokemon.isExists;
        if (isExists === false) {
            throw new Error("pokemon does not exists")
        }

    }
    catch (err) {
        console.error(err, err.cause);
    }
});

document.getElementById('name').addEventListener('input', () => {
    const suggestions = [];
    const allPokemon = lib.getPokemons()
    for(const item of allPokemon) {
        if (suggestions.length >= 10) {
            break;
        }
        if (item.name.startsWith(event.target.value)) {
            suggestions.push(item.name);
        }

    }
    suggestions.forEach(suggestion => {
        const option = document.createElement('option');
        option.setAttribute('value', suggestion);
        document.getElementById('suggestionList').appendChild(option);

    })

});

document.getElementById('findLast').addEventListener('click', async () => {

    const last = lib.getPokemons().at(-1);

    try {
        pokemon = new PokeModule.Pokemon(last.name);
        const isExists = pokemon.isExists;
        if (isExists === false) {
            throw new Error("pokemon does not exists")
        }

    }
    catch (err) {
        console.error(err, err.cause);
    }

})
