
class SalaryController {
    // FP
    getTotalSalary(employees) {
        let totalSalary = 0;
        for (let employee of employees) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}

module.exports = SalaryController;