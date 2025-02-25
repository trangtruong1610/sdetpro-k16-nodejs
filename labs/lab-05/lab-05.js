const readline = require("readline-sync");

const inputStr = String(readline.question("Please input your string: ")).split(' ');

const groupWords = groupWord(inputStr);
console.log(groupWords);

function groupWord(inputStr) {
    const groupedWord = {}
    for (let i = 0; i < inputStr.length; i++) {
        const word = inputStr[i];
        if (groupedWord[word]) {
            groupedWord[word] += 1;
        }else {
            groupedWord[word] = 1;
        }
    }
    return groupedWord;
}