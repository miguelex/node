//const { buildLogger } = require("./plugins");



//const logger = buildLogger("app.js");

//logger.log("Hola mundo");
//logger.error("Esto es algo malo");

// Vamos a pasar a TypeScript
import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

console.log(getPokemonById(1));
logger.log('Hola mundo');
logger.error('Esto es algo malo');