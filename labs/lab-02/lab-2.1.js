const readline = require("readline-sync");

let height = Number(readline.question("Please input your height: "));
let weight = Number(readline.question("Please input your weight: "));

const BMI = weight / (height * height);

console.log(BMI % 2);
console.log(BMI);

if (BMI < 18.5) {
  console.log("You are underweight");
} else if (18.5 <= BMI && BMI <= 24.9) {
  console.log("You are normal weight");
} else if (25 <= BMI && BMI<= 29.9) {
  console.log("Your are overweight");
} else {
  console.log("You are obesity");
}
