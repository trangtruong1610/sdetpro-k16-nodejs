const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

// Create data | OOP
let teo = new Employee("Teo", 10000);
let ti = new Employee("Ti", 15000);

// Init controller, process user-defined data | FP
let salaryController = new SalaryController();

// Get the evaluated result | FP
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);