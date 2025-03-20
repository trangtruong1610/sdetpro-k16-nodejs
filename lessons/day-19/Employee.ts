

export default abstract class Employee {
    protected salary: number;
    protected bonus: number;
    
    constructor(salary: number) {
        this.salary = salary;
        this.bonus = 0;
    }

    public getSalary(): number {
        return this.salary;
    }
    // Strong force to implement setBonus
    protected abstract setBonus(): void;

    public getBonus(): number {
        return this.bonus;
    }
}