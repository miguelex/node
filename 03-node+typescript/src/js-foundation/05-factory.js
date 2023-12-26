//const obj = { name: "Migue", birthdate: "1975-09-03" };

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

//const john = buildPerson(obj);

//console.log(john);

module.exports = {
  buildMakePerson,
};
