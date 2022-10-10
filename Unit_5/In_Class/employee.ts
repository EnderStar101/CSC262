export class Employee  {
    firstName:string
    lastName:string
    employeeId:string
    salary:number

    // Constructor
    constructor(newFirstName:string, newLastName:string, newId:string, newSalary:number)
    {
        this.firstName = newFirstName
        this.lastName = newLastName
        this.employeeId = newId
        this.salary = newSalary
    }

    printInfo()
    {
        console.log("Employee Name:", this.firstName, this.lastName)
        console.log("Employee ID:", this.employeeId)
        console.log("Salary: $" + this.salary, '\n')
    }

    setSalary(newSalary:number)
    {
        this.salary = newSalary

        console.log("Salary updated.\n")
    }

    getSalary()
    {
        console.log('$' + this.salary, '\n')
    }
}