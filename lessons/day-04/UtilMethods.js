// Support function
// Service function - Utility function


// 4 : argument
let isEvenNumber_ = isEventNumber(4);
console.log(`Is even number : ${isEvenNumber_}`);


// number : parameter
function isEventNumber(number) {
    return number % 2 === 0;
}

function isOddNumber(number) {
    return number % 2 !== 0;
}

// Common JS module
module.exports = {isEventNumber, isOddNumber};