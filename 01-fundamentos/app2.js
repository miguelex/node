const fs = require("fs");

const data = fs.readFileSync("readme.md", "utf8");

const newData = data.replace(/React/gi, "Angular");

fs.writeFileSync("README-Angular.md", newData);
