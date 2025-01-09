const {isOddNumber, deleteElementFromArray} = require("../../utils/UtilMethods");


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myArray = [1, 7, 3, 4];

// Delete | splice
// let returnValue = myArray.splice(2, 9, 10, 11)
// console.log(returnValue)
// console.log(myArray)



for (let i = 0; i < myArray.length; i++) {
    if (isOddNumber(myArray[i])) {
        deleteElementFromArray(myArray, i);
        i--;
    }
}

console.log(myArray);
