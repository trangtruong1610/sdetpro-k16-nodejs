// break
let array = [1, 2, 3, 4, 5];
let targetIndex = -1;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 6) {
        targetIndex = i;
        break;
    }
}

if (targetIndex < 0) {
    console.log('No number found!');
} else {
    console.log('The number first found at index', targetIndex);
}

// continue
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 3) {
        continue;
    } else {
        console.log(element);
    }
}

// An array of Positive number, number 3 among them.
// Increase up to 4 for the rest of number
increaseValues(array)
console.log(array);

function increaseValues(array) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (value === 3) {
            return; // return will exit the function, break will exit the loop
        } else {
            array[i] = array[i] + 3;
        }
    }
    console.log('inside function');
}