// Class: is a template/blueprint to build an object

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter
    getName() {
        return this._name;
    }
    get age() {
        return this._age;
    }

    // Setter
    setName(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
}

let teo = new Person("teo", 18); // Invoke the constructor to initialize an object from the class
teo.setName("teo new");
let name = teo.getName();
console.log(name);

teo.age = 19;
let age = teo.age;
console.log(age);