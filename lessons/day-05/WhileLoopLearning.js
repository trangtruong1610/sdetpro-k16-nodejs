const {getUserInput} = require("../../utils/UtilMethods");

let i = 0;
for (; i < 5; i++) {
    console.log(i);
}
console.log('====');

// --- Lucky number game ---
// 1. Guess a number
// 0. Exit!
let isStillPlaying = true;
while (isStillPlaying) {
    printGameMenu()
    let userOption = Number(getUserInput())
    if (userOption === 0) {
        // Conditional change trigger
        isStillPlaying = false;
    }else if (userOption === 1) {
        let randomNumber = Math.floor(Math.random() * 10) + 1
        console.log('Lucky number:', randomNumber);
    }else {
        console.log("wrong number");
    }

}

function printGameMenu() {
    console.log("--- Lucky number game ---\n" +
        "1. Guess a number\n" +
        "0. Exit!");
}

console.log('See you again');