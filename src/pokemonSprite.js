import React from "react";
import "./pokemonSprite.css";
import positioning from "./utils/positioning";
import grass from "./assets/pokemon-tile-grass.png";

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

  const imageError = event => {
    // console.log(event);
    event.target.src = grass;
    singlePokemon.name = "grass";
  };

  // console.log(singlePokemon.name);
  return (
    <img
      className="sprite"
      src={singlePokemon.url}
      onClick={addToTeam}
      style={positioning()}
      onError={imageError}
    />
  );
};

export default PokemonSprite;
