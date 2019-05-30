import React from "react";
import { getPokemonByType } from "./utils/getPokemon";

const PokemonType = ({
  setType,
  type,
  setAllPokemon,
  setTeam,
  setActive,
  setStartDate,
  setCountdown,
  time,
  active,
  setCurrentPokemon
}) => {
  const selectType = event => {
    setType(event.target.value);
  };

  const reset = () => {
    setActive(false);
    setCurrentPokemon(null);
  };

  const submitType = () => {
    getPokemonByType(type)
      .then(json => {
        setAllPokemon(json);
        setTeam([]);
        setActive(true);
        setStartDate(Date.now());
        setCountdown(time);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form>
        <select name="type" onChange={selectType}>
          <option value="1">Normal</option>
          <option value="2">Fighting</option>
          <option value="3">Flying</option>
          <option value="4">Poison</option>
          <option value="5">Ground</option>
          <option value="6">Rock</option>
          <option value="7">Bug</option>
          <option value="8">Ghost</option>
          <option value="9">Steel</option>
          <option value="10">Fire</option>
          <option value="11">Water</option>
          <option value="12">Grass</option>
          <option value="13">Electric</option>
          <option value="14">Psychic</option>
          <option value="15">Ice</option>
          <option value="16">Dragon</option>
          <option value="17">Dark</option>
          <option value="18">Fairy</option>
        </select>

        {active ? (
          <button type="button" onClick={reset}>
            Reset
          </button>
        ) : (
          <button type="button" onClick={submitType}>
            Select
          </button>
        )}
      </form>
    </div>
  );
};

export default PokemonType;
