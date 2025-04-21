import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import Employee from "./Employee";
import {ASC, DESC} from "./SortRuleTypes";

const fteNumber = 3
const contractorNumber = 2
let fteEmployees: Employee[] = [];
let contractorEmployees: Employee[] = [];

for(let fteIndex = 0; fteIndex < fteNumber; fteIndex++){
    fteEmployees.push(new FTE(`FTE_${fteIndex + 1}`));
}

for(let contractorIndex = 0; contractorIndex < contractorNumber; contractorIndex++){
    contractorEmployees.push(new Contractor(`Contractor_${contractorIndex + 1}`));
}

const controller = new EmployeeController();
const employeeList = fteEmployees.concat(contractorEmployees);

let totalSalary = controller.getTotalSalary(employeeList);
console.log(`Total Salary: ${totalSalary}`);

let sortByNameASC = controller.sortByName(employeeList, ASC);
let sortByNameDESC = controller.sortByName(employeeList, DESC);
console.log(`Sort by name ASC: ${JSON.stringify(sortByNameDESC)}`);
console.log(`Sort by name ASC: ${JSON.stringify(sortByNameASC)}`);
