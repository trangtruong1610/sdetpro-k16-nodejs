import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import PartTimeEmployee from "./PartTimeEmployee";

const teo = new FTE();
const ti = new Contractor();
const tun = new PartTimeEmployee();
const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log(`Total salary: ${totalSalary}`);
