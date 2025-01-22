const {getUserNumber, generateRandomNumber} = require("../../utils/UtilMethods");


const randomNumber = generateRandomNumber();
let guessingTime = 0;

do {
    let userNum = getUserNumber();
    if (userNum === randomNumber) {
        // Congrats
        console.log('Hooray');
        break;
    }
    guessingTime++;
} while (guessingTime < 3);


if (guessingTime === 3) {
    console.log('Chuc ban may man lan sau');
} else {
    console.log('See u again');
}