let myString = `Day la chu trong nhay don`;
console.log(myString);

// Length
console.log(myString.length);

// charArt
console.log(myString.charAt(0));

// Print each character
for (let i = 0; i < myString.length; i++) {
    console.log(myString.charAt(i));
}

// eliminate spaces
let trimStr = myString.trim();
console.log(trimStr);

// hint: em phai hy sinh -> remove m
let targetStr = 'tMomi mnay gmap mnmhamu 7MH';
// REGEX
let decodedStr = targetStr.replaceAll(/m/gi, '');
console.log(decodedStr);

let uiStr = "200mins";
let uiStrWithNum = uiStr.replace(/[^0-9]/gi, '');
console.log(uiStrWithNum);

// +, concat() - concatenating
let firstString = 'Hello';
let secondString = 'World';
let combinedString = firstString.concat(secondString).concat('!').concat('1');
console.log(combinedString);

// Sub string
let strToBeCut = 'https://www.sdetpro.com';

// Inclusive
let startIndex = 0;

// Exclusive
let endIndex = 5;

let subString = strToBeCut.substring(startIndex, endIndex);
console.log(subString);

// split
console.log(strToBeCut.split('://'));


















