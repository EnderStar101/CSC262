"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(newFirstName, newLastName, newGender, newId) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.gender = newGender;
        this.studentId = newId;
    }
    Student.prototype.printInfo = function () {
        console.log("Student Name:", this.lastName + ', ' + this.firstName);
        console.log("Gender:", this.gender);
        console.log("Student ID:", this.studentId);
        console.log("Enrolled Courses:", this.enrolledCourses);
        console.log("Email Address:", this.emailAddress);
        console.log("Home Address:", this.homeAddress);
        console.log("Average Grade:", this.avgGrade, '\n');
    };
    // Sets
    Student.prototype.setFirstName = function (newFirstName) {
        this.firstName = newFirstName;
    };
    Student.prototype.setLastName = function (newLastName) {
        this.lastName = newLastName;
    };
    Student.prototype.setGender = function (newGender) {
        this.gender = newGender;
    };
    Student.prototype.setId = function (newId) {
        this.studentId = newId;
    };
    Student.prototype.setCourses = function (newCourses) {
        this.enrolledCourses = newCourses;
    };
    Student.prototype.setEmail = function (newEmail) {
        this.emailAddress = newEmail;
    };
    Student.prototype.setHomeAddress = function (newHomeAddress) {
        this.homeAddress = newHomeAddress;
    };
    Student.prototype.setAvgGrade = function (newAvgGrade) {
        this.avgGrade = newAvgGrade;
    };
    // Gets
    Student.prototype.getFirstName = function () {
        console.log("Student First Name:", this.firstName, '\n');
    };
    Student.prototype.getLastName = function () {
        console.log("Student Last Name:", this.lastName, '\n');
    };
    Student.prototype.getGender = function () {
        console.log("Gender:", this.gender, '\n');
    };
    Student.prototype.getFullName = function () {
        console.log("Student Name:", this.lastName + ', ' + this.firstName, '\n');
    };
    Student.prototype.getId = function () {
        console.log("Student ID:", this.studentId, '\n');
    };
    Student.prototype.getCourses = function () {
        console.log("Enrolled Courses:", this.enrolledCourses, '\n');
    };
    Student.prototype.getEmail = function () {
        console.log("Email Address:", this.emailAddress, '\n');
    };
    Student.prototype.getHomeAddress = function () {
        console.log("Home Address:", this.homeAddress, '\n');
    };
    Student.prototype.getAvgGrade = function () {
        console.log("Average Grade:", this.avgGrade, '\n');
    };
    return Student;
}());
exports.Student = Student;
