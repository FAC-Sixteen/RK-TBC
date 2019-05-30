import { getPokemonInfo } from "./getPokemon";

const getCurrentPokemon = (allPokemon, setCurrentPokemon, currentPokemon, index) => {
  // console.log("+recursion", currentPokemon);
  index++

  if (currentPokemon != null && index >= 4) {
  
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
    
    getCurrentPokemon(allPokemon, setCurrentPokemon, pokemonArray, index);

    // return;
  });
};

export default getCurrentPokemon;
