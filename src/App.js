import React from "react";
import PokemonType from "./pokemonType";
import Countdown from "react-countdown-now";
import PokemonSprite from "./pokemonSprite";
import getCurrentPokemon from "./utils/getCurrentPokemon";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [type, setType] = React.useState(1);
  const [allPokemon, setAllPokemon] = React.useState(null);
  const [team, setTeam] = React.useState([]);
  const [currentPokemon, setCurrentPokemon] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [countdown, setCountdown] = React.useState(30000);
  const [active, setActive] = React.useState(false);

  // console.log(currentPokemon);

  const renderer = ({ seconds, total, completed }) => {
    if (completed) {
      return <p>done</p>;
    } else {
      if (seconds * 1000 === total && seconds % 3 === 0) {
        // console.log(total);
        setCountdown(total / 1000);
      }
      return <p>{total / 1000}s</p>;
    }
  };

  React.useEffect(
    () => {
      console.log(countdown);
      // setCurrentPokemon(null);
      console.log(currentPokemon);
      if (allPokemon != null) {
        getCurrentPokemon(allPokemon, setCurrentPokemon, currentPokemon);
      }
      return () => setCurrentPokemon(null);
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
      />
      {active && <Countdown date={startDate + 30000} renderer={renderer} />}
      {currentPokemon &&
        currentPokemon.map((current, index) => {
          return <PokemonSprite currentPokemon={current} />;
        })}
    </div>
  );
}

export default App;
