import {Employee} from "./Employee.js";

export class SalaryController {
    // FP
    getTotalSalary(employees: Employee[]) {
        let totalSalary: number = 0;
        for (let employee of employees) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}
