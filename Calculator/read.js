const fs = require("fs");

const data = fs.readFileSync("printData.json", "utf-8");
console.log(data);