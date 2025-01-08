const {sortMinToMax, sortMaxToMin} = require('../../utils/UtilMethods');

let intArr = [12, 34, 1, 16, 28];

let sortedMinToMaxArray = sortMinToMax(intArr);
console.log("Min to max array:", sortedMinToMaxArray);

let sortedMaxToMinArray = sortMaxToMin(intArr);
console.log("Max to min array:", sortedMaxToMinArray);