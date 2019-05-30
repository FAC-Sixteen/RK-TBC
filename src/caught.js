import React from "react";

const Caught = ({ team }) => {
  let title = "Well Done Trainer";
  if (team.length < 20) {
    title = "did you run out of pokeballs or something";
  }
  return (
    <ul>
      <h2>{title}</h2>
      <h3>You've caught {team.length} pokemon</h3>
      {team.map(pokemon => {
        return (
          <li>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} />
          </li>
        );
      })}
    </ul>
  );
};

export default Caught;
