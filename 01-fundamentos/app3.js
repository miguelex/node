const fs = require("fs");

const data = fs.readFileSync("readme.md", "utf8");

const wordCount = data.split(" ");

// Mi solucion

/*const reactWord = wordCount.filter(
  (word) => word.toLowerCase() === "react"
).length;*/

// UNa mejora

/*const reactWord = wordCount.filter((word) =>
  word.toLowerCase().includes("react")
).length;*/

// La solucion de Fernando

const reactWord = data.match(/react/gi ?? []).length;

console.log(wordCount.length);

console.log(reactWord);
