import generatePokemonObject from "./generatePokemonObject";

const testObject = {
  name: "pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/25/"
};

const expectedObject = {
  name: "pikachu",
  url:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
};

test("test that generatePokemonObject correctly formats given object", () => {
  expect(generatePokemonObject(testObject)).toEqual(expectedObject);
});
