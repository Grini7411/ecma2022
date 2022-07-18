export class Utils {

    static async getPokemonByName(name) {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        try {
            const res  = await fetch(url);

            return await res.json();
        }
        catch (err) {
            throw new Error(`there is an error with the fetching of the pokemon '${name}'`, {cause: err});
        }
    }
}
