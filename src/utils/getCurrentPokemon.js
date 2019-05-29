import { getPokemonInfo } from "./getPokemon";

const getCurrentPokemon = (allPokemon, setCurrentPokemon, currentPokemon) => {
  // console.log("+recursion", currentPokemon);
  if (currentPokemon != null && currentPokemon.length >= 3) {
    return;
  }
  let pokemonArray = [];
  if (currentPokemon != null) {
    pokemonArray = [...currentPokemon];
  }
  getPokemonInfo(
    allPokemon[Math.floor(Math.random() * allPokemon.length)].pokemon.url
  ).then(json => {
    if (json.sprites.front_default) {
      pokemonArray.push(json);
      setCurrentPokemon(pokemonArray);
    }
    getCurrentPokemon(allPokemon, setCurrentPokemon, pokemonArray);

    // return;
  });
};

export default getCurrentPokemon;
