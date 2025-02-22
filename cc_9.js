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


// Task 2 - Creating Manager Class Inheritance //

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    };

    getDetails() {
        return `Manager Name: ${this.name}, Manager ID: ${this.name}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
    };

    calculateBonus() {
        return (this.salary * 12) * .10;
    };
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); 
