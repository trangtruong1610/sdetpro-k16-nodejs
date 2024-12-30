const readline = require("readline-sync");

let height = Number(readline.question("Please input your height: "));
let weight = Number(readline.question("Please input your weight: "));

const BMI = weight / (height * height);

if (BMI < 18.5) {
  console.log(
    `Your BMI is : ${BMI.toFixed(
      2
    )}. You're underweight. Consider gaining weight with a healthy diet. Consult a healthcare provider for guidance.`
  );
} else if (18.5 <= BMI && BMI <= 24.9) {
  console.log(
    `Your BMI is : ${BMI.toFixed(
      2
    )}. Great! You're in a healthy weight range. Keep up the good work.`
  );
} else if (25 <= BMI && BMI <= 29.9) {
  console.log(
    `Your BMI is : ${BMI.toFixed(
      2
    )}. You're overweight. A balanced diet and exercise could help you lose weight. Consider seeking advice from a professional.`
  );
} else {
  console.log(
    `Your BMI is : ${BMI.toFixed(
      2
    )}. You're obese. Losing weight is important for health. Consult a doctor or nutritionist for a personalized plan.`
  );
}
