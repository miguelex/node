const { getAge, getUUID } = require("./plugins");

const { buildMakePerson } = require("./js-foundation/05-factory");

const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: "Migue", birthdate: "1975-09-03" };

const john = makePerson(obj);

console.log(john);
