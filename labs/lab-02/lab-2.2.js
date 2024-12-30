const readline = require("readline-sync");

let inputNum = Number(readline.question("Please input the number: "));

let evenNum = (inputNum % 2 == 0)
let msg = evenNum ? "It's an even Number" : "It's odd number"
console.log(msg);

