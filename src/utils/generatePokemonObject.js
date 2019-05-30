const generatePokemonObject = pokemon => {
  let formattedPokemon = { name: pokemon.name };
  const splitUrl = pokemon.url.split("/");
  const url = splitUrl[splitUrl.length - 2];
  // console.log(url);
  formattedPokemon.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`;
  return formattedPokemon;
};

export default generatePokemonObject;
