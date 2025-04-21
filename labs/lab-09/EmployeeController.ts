import Employee from "./Employee";
import {ASC, DESC} from "./SortRuleTypes";

export default class EmployeeController{
    getTotalSalary(employees: Employee[]): number{
        let totalSalary = 0;
        for(let employee of employees){
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }
    getMinSalary(employees: Employee[]): Employee{
        let minSalaryEmp = employees[0];
        for(let employee of employees){
            if(employee.getSalary() < minSalaryEmp.getSalary()){
                minSalaryEmp = employee;
            }
        }
        return minSalaryEmp;
    }
    getMaxSalary(employees: Employee[]): Employee{
        let maxSalaryEmp = employees[0];
        for(let employee of employees){
            if(employee.getSalary() > maxSalaryEmp.getSalary()){
                maxSalaryEmp = employee;
            }
        }
        return maxSalaryEmp;
    }

    sortByName(employeeList : Employee[], rule: string): Employee[]{
        const copy = [...employeeList];
        if(rule === ASC){
            return copy.sort((a, b) => a.getName().localeCompare(b.getName()));
        }else if(rule === DESC){
            return copy.sort((a, b) => b.getName().localeCompare(a.getName()));
        }else {
            this.throwInvalidSortRule()
            return copy;
        }
    }

    sortBySalary(employeeList : Employee[], rule: string): Employee[]{
        const copy = [...employeeList];
        if(rule === ASC){
            return copy.sort((a, b) => a.getSalary() - b.getSalary());
        }else if(rule === DESC){
            return copy.sort((a, b) => b.getSalary() - a.getSalary());
        }else {
            this.throwInvalidSortRule()
            return copy;
        }
    }

    private throwInvalidSortRule(){
        throw new Error("Invalid sort rule");
    }
}