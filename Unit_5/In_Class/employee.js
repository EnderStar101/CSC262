"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    // Constructor
    function Employee(newFirstName, newLastName, newId, newSalary) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.employeeId = newId;
        this.salary = newSalary;
    }
    Employee.prototype.printInfo = function () {
        console.log("Employee Name:", this.firstName, this.lastName);
        console.log("Employee ID:", this.employeeId);
        console.log("Salary: $" + this.salary, '\n');
    };
    Employee.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
        console.log("Salary updated.\n");
    };
    Employee.prototype.getSalary = function () {
        console.log('$' + this.salary, '\n');
    };
    return Employee;
}());
exports.Employee = Employee;
