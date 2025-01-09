const {sortNumberASC, sortNumberDESC} = require("../../utils/UtilMethods");

let array = [1, 2, 3, 4, 5];

// Map
let returnArray = array.map(myRule);
console.log(returnArray);

console.log(array);

function myRule(value, index, array) {
    return value * 2;
}

console.log('====');

// forEach
let newArray = []; // need new array to hold the value because forEach not change the origin array
array.forEach(addAutomationUsername);

function addAutomationUsername(value, index, array) {
    newArray.push(`AutomationUser_${value}`);
}

console.log(newArray);
console.log('====');

// Sort - String
let string = ['B', 'C', 'A'];
string.sort();
string.reverse();
console.log(string);
console.log('====');

// Sort - Number | Not appropriate
let numberArray = [100, 19, 22];
numberArray.sort(sortNumberASC);
console.log(numberArray);

numberArray.sort(sortNumberDESC);
console.log(numberArray);

