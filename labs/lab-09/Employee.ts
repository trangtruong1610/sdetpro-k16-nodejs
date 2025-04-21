
export default abstract class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string) {
        this.name = name;
    }

    getName(){
        return this.name;
    }
    abstract setSalary(): void

    getSalary(){
        return this.salary;
    }

}