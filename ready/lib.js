
const url  = `https://pokeapi.co/api/v2/pokemon?limit=1132`;

const res  = await fetch(url);

const data = await res.json();


export const getPokemons = () => {
    return data['results'];
}
