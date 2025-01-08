const {sortMinToMax} = require('../../utils/UtilMethods');

let array01 = [1, 12, 16, 28, 34];
let array02 = [1, 13, 16, 27, 99];

let mergedArray = array01.concat(array02);

console.log("Array after merged:", mergedArray);

let sortedArray = sortMinToMax(mergedArray);
console.log("Array after sorted:", sortedArray);
