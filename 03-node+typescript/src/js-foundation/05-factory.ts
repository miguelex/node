interface BuildMakerPersonOptions{
  getUUID: () => string;
  getAge: (birthdate:string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {
  return ({ name, birthdate }:PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

