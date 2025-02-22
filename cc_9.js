// Task 1 - Creating Employee Class //

class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() {
        return `Employee Name: ${this.name}, Employee ID: ${this.id}, Employee Department: ${this.department}, Employee Salary: ${this.salary}`
    };

    calculateAnnualSalary() {
        return this.salary * 12
    };
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary()); 
