const {findMaxNumber, findMinNumber} = require('../../utils/UtilMethods');


let intArr = [1, 2, 3, 4, 5];

let maxNumber = findMaxNumber(intArr);
let minNumber = findMinNumber(intArr);


console.log("Max number is :", maxNumber);
console.log("Min number is :", minNumber);