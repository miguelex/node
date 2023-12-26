const { getAge, getUUID } = require("./plugins");

const getPokemonById = require("./js-foundation/06-promises");

getPokemonById(4)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalmente"));

/*const { buildMakePerson } = require("./js-foundation/05-factory");

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: "Migue", birthdate: "1975-09-03" };

const john = makePerson(obj);

console.log(john);*/
