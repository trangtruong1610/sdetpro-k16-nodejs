const {getUserNumber} = require("../../utils/UtilMethods");

let userNumber = getUserNumber();

if (userNumber === 2) {
    console.log('Monday');
} else if (userNumber === 3) {
    console.log('Tuesday');
}

switch (userNumber) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Weekdays');
        break;
    case 7:
    case 8:
        console.log('Weekends');
        break;
    default:
        console.log('Wrong number');
        break;
}