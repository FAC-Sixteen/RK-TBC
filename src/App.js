import React from "react";
import PokemonType from "./pokemonType";
import Countdown from "react-countdown-now";
import PokemonSprite from "./pokemonSprite";
import Caught from "./caught";
import getCurrentPokemon from "./utils/getCurrentPokemon";
// import logo from "./logo.svg";
import "./App.css";

const time = 10000;

function App() {
  const [type, setType] = React.useState(1);
  const [allPokemon, setAllPokemon] = React.useState(null);
  const [team, setTeam] = React.useState([]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [countdown, setCountdown] = React.useState(time);
  const [active, setActive] = React.useState(false);

  // console.log(currentPokemon);

  const renderer = ({ seconds, total, completed }) => {
    if (completed) {
      setCurrentPokemon(null);
      return <Caught team={team} />;
    } else {
      if (seconds * 1000 === total && seconds % 3 === 0) {
        // console.log(total);
        setCountdown(total / 1000);
      }
      return <p>{total / 1000}s</p>;
    }
  };

  const displayTeam = () => {
    if (team.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(
    () => {
      console.log(countdown);

      console.log(currentPokemon);
      if (allPokemon != null) {
        getCurrentPokemon(allPokemon, setCurrentPokemon, currentPokemon, 0);
      }
      // return () => setCurrentPokemon(null);
    },
    [countdown]
  );

  return (
    <div className="App">
      <h1>The Long Grass</h1>
      <PokemonType
        setType={setType}
        type={type}
        setAllPokemon={setAllPokemon}
        setTeam={setTeam}
        setActive={setActive}
        setStartDate={setStartDate}
        setCountdown={setCountdown}
        time={time}
        active={active}
        setCurrentPokemon={setCurrentPokemon}
      />
      {active && <Countdown date={startDate + time} renderer={renderer} />}
      <div className="field">
        {currentPokemon &&
          currentPokemon.map((current, index) => {
            return (
              <PokemonSprite
                singlePokemon={current}
                setTeam={setTeam}
                team={team}
                index={index}
                setCurrentPokemon={setCurrentPokemon}
                currentPokemon={currentPokemon}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
