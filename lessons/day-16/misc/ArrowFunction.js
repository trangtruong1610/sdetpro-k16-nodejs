// Type: function declaration
function add(a, b) {
    return a + b;
}

// Type: function expression
const add1 = function (a, b) {
    return a + b;
};

// Type: arrow function
const arrowAddNumbers = a => console.log(a);

// Lexical this binding
const person = {
    name: 'John',
    age: 25,
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, 2000);
    }
};

/// Object literal
// Lexical this binding
const person1 = {
    name: 'John',
    age: 25,
    sayHello: function () {
        setTimeout(function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, 2000);
    }
};

const array = [1, 2, 3, 4, 5];
const oddNumber = number => number % 2 !== 0;
person1.sayHello();