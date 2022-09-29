function swap(n1:number, n2:number)     // Exercise 1
{
    let temp:number

    console.log(n1, ' ', n2)

    temp = n1
    n1 = n2
    n2 = temp

    console.log(n1, ' ', n2)
}

function compare(n1:number, n2:number)  // Exercise 2
{
    console.log("n1 is greater than n2: ", n1 > n2)
    console.log("n1 is less than or equal to n2: ", n1 <= n2)
    console.log("n1 is not equal to n2: ", n1 != n2)
}

function concant()      // Exercise 3
{
    let str1:string = "I"
    let str2:string = "love"
    let str3:string = "Typescript!"

    console.log(str1 + ' ' + str2 + ' ' + str3)
}

function valueCheck(n1:number)      // Exercise 4
{
    if (n1 > 0)
    {
        console.log("The value stored in n1 is positive.")
    }
    else if (n1 < 0)
    {
        console.log("The value stored in n1 is negative.")
    }
    else
    {
        console.log("The value stored in n1 is 0.")
    }
}

function weekCheck(n1:number)       // Exercise 5
{
    let day:string

    switch(n1)
    {
        case 1:
            day = "Sunday"
            break
        
        case 2:
            day = "Monday"
            break

        case 3:
            day = "Tuesday"
            break
        
        case 4:
            day = "Wednesday"
            break

        case 5:
            day = "Thursday"
            break
        
        case 6:
            day = "Friday"
            break
        
        case 7:
            day = "Saturday"
            break
        
        default:
            day = "N/A"
    }

    console.log(day)
}

console.log('\n')

let n1:number = 5
let n2:number = 2

swap(n1, n2)

console.log('\n')

compare(n1, n2)

console.log('\n')

concant()

console.log('\n')

valueCheck(n1)

console.log('\n')

weekCheck(n1)