import {Employee} from "./employee.js"

let john:Employee = new Employee("John", "Smith", "074865", 78000)

john.printInfo()
john.setSalary(80000)
john.getSalary()

console.log('\n')

let bob = new Employee("Bob", "Builder", "127949", 57000)

bob.printInfo()
bob.setSalary(55000)
john.getSalary()