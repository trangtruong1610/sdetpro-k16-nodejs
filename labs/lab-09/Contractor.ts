import Employee from "./Employee";

export default class Contractor extends Employee {
    constructor(name: string) {
        super(name);
        this.setSalary();
    }

    setSalary(){
        this.salary = 40000;
    }
}