import React from "react";
import "./caught.css";
import grass from "./assets/pokemon-tile-grass.png";

const Caught = ({ team }) => {
  const imageError = event => {
    event.target.src = grass;
    // console.log(event);
  };

  let title = "Well Done Trainer!!!";
  if (team.length < 20) {
    title = "Did you run out of pokeballs or something??";
  }
  return (
    <ul className="caughtPokemon">
      <h2>{title}</h2>
      <h3>You've caught {team.length} pokemon</h3>
      {team.map(pokemon => {
        return (
          <li className="pokemonTile">
            <h3>{pokemon.name}</h3>
            <img alt={pokemon.name} src={pokemon.url} onError={imageError} />
          </li>
        );
      })}
    </ul>
  );
};

export default Caught;
