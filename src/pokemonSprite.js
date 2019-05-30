import React from "react";
import "./pokemonSprite.css";
import positioning from "./utils/positioning";

const PokemonSprite = ({
  singlePokemon,
  setTeam,
  team,
  index,
  setCurrentPokemon,
  currentPokemon
}) => {
  const addToTeam = event => {
    const current = [...currentPokemon];
    const newTeam = [...team];
    current.splice(index, 1);
    newTeam.push(singlePokemon);
    setCurrentPokemon(current);
    setTeam(newTeam);
  };

  // console.log(singlePokemon.name);
  return (
    <img
      className="sprite"
      src={singlePokemon.url}
      onClick={addToTeam}
      style={positioning()}
    />
  );
};

export default PokemonSprite;
