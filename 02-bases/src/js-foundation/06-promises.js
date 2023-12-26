const { http } = require("../plugins");
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);

  return pokemon.name;

  throw new Error("Pokemon no existe");

  return pokemon.name;

  /*return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(() => {
      throw new Error("Pokemon no existe");
    })
    .then((pokemon) => {
      return pokemon.name;
    });*/
};

module.exports = getPokemonById;
