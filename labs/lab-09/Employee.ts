
export default class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, maxSalary: number) {
        this.name = name;
        this.salary = Math.floor(Math.random() * maxSalary);
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
}