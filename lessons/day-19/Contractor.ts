import Employee from "./Employee";

export default class FTE extends Employee {
    constructor() {
        super(10 * 1000);
    }

    setBonus() {
        this.bonus = 500;
    }

}