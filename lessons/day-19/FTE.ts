import Employee from "./Employee";

export default class FTE extends Employee {
    constructor() {
        super(20 * 1000);
    }

    setBonus() {
        this.bonus = 1000;
    }
}