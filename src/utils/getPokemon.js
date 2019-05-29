const getPokemonByType = type => {
  return new Promise((resolve, reject) => {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json.pokemon))
      .catch(err => reject(err));
  });
};

const getPokemonInfo = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        resolve(json);
      })
      .catch(err => reject(err));
  });
};

export { getPokemonByType, getPokemonInfo };
