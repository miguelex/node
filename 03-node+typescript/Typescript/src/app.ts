import { findHeroeById } from "./services/hero.service";


const hero = findHeroeById(3);

console.log(hero?.name ?? "Hero not found");
