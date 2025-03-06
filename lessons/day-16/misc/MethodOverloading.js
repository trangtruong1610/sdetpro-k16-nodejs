class MethodOverloading {
    // static add(a, b) {
    //     return a + b;
    // }
    //
    // static add(a, b, c) {
    //     return a + b + c;
    // }

    // Rest Parameter
    static add(factor, anotherThing,...nums) {
        return nums.map(num => num * factor);
    }
}

// const result2 = MethodOverloading.add(1, 2);
// const result3 = MethodOverloading.add(1, 2, 3);
// console.log(result2);
// console.log(result3);

let methodOverloading = new MethodOverloading();
// console.log(methodOverloading.add(2,3,4, 5));

class ArrayHelper {
    static filterNumber(array, isEven) {
        if(isEven) {
            return array.filter(num => num % 2 === 0);
        }else {
            return array.filter(num => num % 2 !== 0);
        }
    }
}

let targetArray = [1, 2, 3, 4, 5];
const evenNumber = ArrayHelper.filterNumber(targetArray, true);
const oddNumber = ArrayHelper.filterNumber(targetArray, false);
console.log(evenNumber);
console.log(oddNumber);