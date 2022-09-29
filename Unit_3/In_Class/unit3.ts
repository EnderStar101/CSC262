// Exercise 1

let a:number = 2
let b:number = 8
let x:number = a / b

console.log(x)

console.log('\n')

// Exercise 2

let str1:string = "My name is "
let str2:string = "Michael."
let str3:string = str1 + str2

console.log(str3)

console.log('\n')

// Exercise 3

if (a > 0)
{
    console.log("a is a positive number.")
}
else if (a < 0)
{
    console.log("a is a negative number.")
}
else
{
    console.log("a is equal to zero.")
}

console.log('\n')

// Exercise 4

if (b % 2 == 0)
{
    console.log("b is an even number")
}
else
{
    console.log("b is an odd number")
}

console.log('\n')

// For fun

let c:number = 4

let array:number[] = [a , b , c]

for (let i:number = 0; i < array.length; i++)
{
    for (let j:number = 0; j < 2; j++)
    {
        if (array[j] < array[j + 1])
        {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log(array)