/**
 *
 * Two Sum
 * [3,7,22,1], target number: 8
 * -> [1, 3] index
 *
 */

// Brute force
/**
 outer loop index 0 ->
 firstNum
 inner loop index + 1 -> length - 1
 if(firstNum + current === target)
 return [firstNumIndex, secondIndex]
 return []
 */

// Time Complexity : Big O notation On^2
const givenArray = [3, 7, 22, 1];
const targetNumber = 8;

let indices = findIndicesUsingBruteForce(givenArray, targetNumber);
console.log(indices);
function findIndicesUsingBruteForce(givenArray, targetNumber) {
    for (let firstNumberIndex = 0; firstNumberIndex < givenArray.length - 1; firstNumberIndex++) {
        const firstNum = givenArray[firstNumberIndex];
        for (let secondNumberIndex = 1; secondNumberIndex < givenArray.length; secondNumberIndex++) {
            const secondNum = givenArray[secondNumberIndex];
            if (firstNum + secondNum === targetNumber) {
                return [firstNumberIndex, secondNumberIndex];
            }
        }
    }
    return [];
}

// O(n)
let indicesMap = findIndicesUsingMap(givenArray, targetNumber);
console.log(indicesMap);

function findIndicesUsingMap(givenArray, targetNumber) {
    let numMap = new Map()
    for (let currentNumberIndex = 0; currentNumberIndex < givenArray.length; currentNumberIndex++) {
        const firstNum = givenArray[currentNumberIndex];
        const lookingNum = targetNumber - firstNum;
        if (numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), currentNumberIndex];
        }
        numMap.set(firstNum, currentNumberIndex);
    }
    return [];
}