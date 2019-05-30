import { getPokemonInfo } from "./getPokemon";
import generatePokemonObject from "./generatePokemonObject";

const getCurrentPokemon = (
  allPokemon,
  setCurrentPokemon,
  currentPokemon,
  index
) => {
  // console.log("+recursion", currentPokemon);
  if (currentPokemon != null && index >= 4) {
    return;
  }
  let pokemonArray = [];
  if (currentPokemon != null) {
    pokemonArray = [...currentPokemon];
  }

  const pokemon = generatePokemonObject(
    allPokemon[Math.floor(Math.random() * allPokemon.length)].pokemon
  );

  pokemonArray.push(pokemon);
  setCurrentPokemon(pokemonArray);
  index++;

  getCurrentPokemon(allPokemon, setCurrentPokemon, pokemonArray, index);

  // return;
};

export default getCurrentPokemon;
