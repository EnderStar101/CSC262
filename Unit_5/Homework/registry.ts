import {Student} from "./student.js"

// First Example
let student1:Student = new Student("Michael", "Martini", "M", "01865328")

student1.setCourses(["CSC262", "ENG200"])
student1.setEmail("mcm7565@gmail.com")
student1.setHomeAddress("38 Debra Ln")
student1.setAvgGrade(90.7)

student1.printInfo()
console.log('\n')

// Second Example
let student2:Student = new Student("Anthony", "Dest", "M", "09876543")

student2.setFirstName("Victoria")
student2.setLastName("Martini")
student2.setGender("F")
student2.setId("12345678")
student2.setCourses(["ENG100", "ECO105", "SCI302"])
student2.setEmail("vicmail0189@yahoo.com")
student2.setHomeAddress("35 East Gate Ln")
student2.setAvgGrade(79.5)

student2.getFirstName()
student2.getLastName()
student2.getGender()
student2.getId()
student2.getCourses()
student2.getEmail()
student2.getHomeAddress()
student2.getAvgGrade()

console.log('\n')

// Third Example
let student3 = new Student("Fake", "Person", "N/A", "10293847")

student3.setCourses(["N/A"])
student3.setEmail("notreal123@madeup.net")
student3.setHomeAddress("82 Cloud Nine Rd")
student3.setAvgGrade(0.2)

student3.getFullName()
student3.getGender()
student3.getId()
student3.getCourses()
student3.getEmail()
student3.getHomeAddress()
student3.getAvgGrade()