"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_js_1 = require("./Employee.js");
var SalaryController_js_1 = require("./SalaryController.js");
// Create data | OOP
var teo = new Employee_js_1.Employee("Teo", 10000);
var ti = new Employee_js_1.Employee("Ti", 15000);
// Init controller, process user-defined data | FP
var salaryController = new SalaryController_js_1.SalaryController();
// Get the evaluated result | FP
var totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log("Total salary: ".concat(totalSalary));
// Mismatching between desired parameters and arguments
