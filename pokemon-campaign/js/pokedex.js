const getPokemon = async() => {
    const url = "";
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("Issue");
    }
};

const displayPokemon = async() => {
    const pokemon = await getPokemon();
    const pokedexPokemonSection = document.getElementById("")
}