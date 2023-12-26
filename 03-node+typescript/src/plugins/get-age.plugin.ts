const getAgePlugin = require("get-age");

export const getAge = (birthdate:string) => {
  return getAgePlugin(birthdate);
};

