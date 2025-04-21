export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.validateAge(age)
        this.name = name;
        this.age = age;
    }

    setAge(age: number) {
        this.validateAge(age)
        this.age = age;
    }

    private validateAge(age: number) {
        if (age < 0) {
            throw new Error('Age must be greater than 0');
        }
    }
}