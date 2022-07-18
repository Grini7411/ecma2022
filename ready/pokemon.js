import {Utils} from "./utils.js";

export class Pokemon {
    #name;
    #pokemonData;

    constructor(name) {
        this.#name = name;

        Utils.getPokemonByName(name)
            .then(data => {
                this.#pokemonData = data;
                this.isExists = Object.hasOwn(this.#pokemonData, 'id');
                this.#revealInfo();
            })
    }

    getName() {
        return this.#name;
    }

    #revealInfo() {
        document.getElementById('dexCard').style.display = 'block';
        const pokemonName = this.#pokemonData['name'].charAt(0).toUpperCase() + this.#pokemonData['name'].slice(1);
        document.getElementById('card-title').textContent = pokemonName + ' ' + this.#pokemonData['id'];


        let cardImage = this.#pokemonData['sprites']['front_default'];
        document.getElementById('image').setAttribute('src', this.#pokemonData['sprites']['front_default'])
        if (!cardImage) {
            fetch(this.#pokemonData?.species['url'])
                .then(res => res.json())
                .then(data => {
                    cardImage = data['sprites']['front_default'];
                })
        }


        const attacks = this.#pokemonData['moves'].slice(0, 4);
        const attacksNode = document.getElementById('attacks');
        attacksNode.innerHTML = '';
        attacks.forEach(attack => {
            const el = document.createElement('button');
            el.setAttribute('class','col-5 mb-2 mx-1 btn btn-danger')
            el.textContent = attack['move']['name'];

            attacksNode.appendChild(el);

        })
    }

    static getLastPokemon() {

    }


}

