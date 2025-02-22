// Task 1 - Creating Employee Class //

class Employee { // creating a class with employee information
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    getDetails() { // adding a method to return employee details
        return `Employee Name: ${this.name}, Employee ID: ${this.id}, Employee Department: ${this.department}, Employee Salary: ${this.salary}`
    };

    calculateAnnualSalary() { // adding a method to return employee salary calculation
        return this.salary * 12
    };
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // introducing a new employee using the class

console.log(emp1.getDetails()); // logging the employee details
console.log(emp1.calculateAnnualSalary()); // logging the employee salary calculation
