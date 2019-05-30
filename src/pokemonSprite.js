import React from "react";

const PokemonSprite = ({ currentPokemon }) => {
  console.log(currentPokemon.name);
  return <img src={currentPokemon.sprites.front_default} />;
};

export default PokemonSprite;
