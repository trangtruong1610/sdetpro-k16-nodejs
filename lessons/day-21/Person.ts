export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

// teo is an immutable object | READ ONLY (object only have getter)
// teo is an immutable object | WRITE ONLY (object only have setter)
let teo = new Person("Teo", 20)