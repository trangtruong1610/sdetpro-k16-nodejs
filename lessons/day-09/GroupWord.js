const givenSts = 'Hello ban, tui ten Teo, ban cung ten Teo luon ah';
let individualWords = givenSts.replace(/,/gi, '').split(' ');
console.log(individualWords);

const groupWords = groupWordMap(individualWords);
const groupWords1 = groupWordObj(individualWords);
console.log(groupWords);
/**
 * Hello: 1
 * ban: 2
 */

function groupWordMap(individualWords) {
    const workMap = new Map()
    for (const word of individualWords) {
        if (workMap.has(word)) {
            workMap.set(word, workMap.get(word) + 1);
        }else {
            workMap.set(word, 1);
        }
    }
    return workMap;
}
function groupWordObj(individualWords) {
    const workMap = {}
    for (let i = 0; i < individualWords.length; i++) {
        const word = individualWords[i];
        if (workMap[word]) {
            workMap[word] += 1;
        }else {
            workMap[word] = 1;
        }
    }
    return workMap;
}
