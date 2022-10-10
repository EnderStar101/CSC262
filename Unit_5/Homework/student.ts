export class Student    {
    firstName:string
    lastName:string
    gender:string
    studentId:string
    enrolledCourses:string[]
    emailAddress:string
    homeAddress:string
    avgGrade:number

    constructor(newFirstName:string, newLastName:string, newGender:string, newId:string)
    {
        this.firstName = newFirstName
        this.lastName = newLastName
        this.gender = newGender
        this.studentId = newId
    }

    printInfo()
    {
        console.log("Student Name:", this.lastName + ', ' + this.firstName)
        console.log("Gender:", this.gender)
        console.log("Student ID:", this.studentId)
        console.log("Enrolled Courses:", this.enrolledCourses)
        console.log("Email Address:", this.emailAddress)
        console.log("Home Address:", this.homeAddress)
        console.log("Average Grade:", this.avgGrade, '\n')
    }

    // Sets
    setFirstName(newFirstName:string)
    {
        this.firstName = newFirstName
    }

    setLastName(newLastName:string)
    {
        this.lastName = newLastName
    }

    setGender(newGender:string)
    {
        this.gender = newGender
    }

    setId(newId:string)
    {
        this.studentId = newId
    }

    setCourses(newCourses:string[])
    {
        this.enrolledCourses = newCourses
    }

    setEmail(newEmail:string)
    {
        this.emailAddress = newEmail
    }

    setHomeAddress(newHomeAddress:string)
    {
        this.homeAddress = newHomeAddress
    }

    setAvgGrade(newAvgGrade)
    {
        this.avgGrade = newAvgGrade
    }
    
    // Gets
    getFirstName()
    {
        console.log("Student First Name:", this.firstName, '\n')
    }

    getLastName()
    {
        console.log("Student Last Name:", this.lastName, '\n')
    }

    getGender()
    {
        console.log("Gender:", this.gender, '\n')
    }

    getFullName()
    {
        console.log("Student Name:", this.lastName + ', ' + this.firstName, '\n')
    }

    getId()
    {
        console.log("Student ID:", this.studentId, '\n')
    }

    getCourses()
    {
        console.log("Enrolled Courses:", this.enrolledCourses, '\n')
    }

    getEmail()
    {
        console.log("Email Address:", this.emailAddress, '\n')
    }

    getHomeAddress()
    {
        console.log("Home Address:", this.homeAddress, '\n')
    }

    getAvgGrade()
    {
        console.log("Average Grade:", this.avgGrade, '\n')
    }
}