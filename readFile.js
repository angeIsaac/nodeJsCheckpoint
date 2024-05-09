const fs = require("fs");

fs.writeFileSync("welcome.txt", "hello node");

const readFile = fs.readFileSync("welcome.txt", "utf8");

console.log(readFile);