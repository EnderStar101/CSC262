
function sum(num1, num2, num3) {    // takes 3 integer values and finds the sum
    let answer = num1 + num2 + num3

    console.log(answer)     // using 4 variables

    answer = 2 + 3 + 8
    console.log(answer)     // using 1 variable
    
    console.log(2 + 3 + 8)  // using 0 variables
}

function difference(num1, num2, num3) {    // takes 3 integer values and finds the difference
    let answer = num1 - num2 - num3

    console.log("\n" + answer)  // using 4 variables

    answer = 2 - 3 - 8
    console.log(answer)         // using 1 variable
    
    console.log(2 - 3 - 8)      // using 0 variables
}

function product(num1, num2, num3) {    // takes 3 integer values and finds the product
    let answer = num1 * num2 * num3

    console.log("\n" + answer)  // using 4 variables

    answer = 2 * 3 * 8
    console.log(answer)         // using 1 variable
    
    console.log(2 * 3 * 8)      // using 0 variables
}

let num1 = 2
let num2 = 3
let num3 = 8

sum(num1, num2, num3)
difference(num1, num2, num3)
product(num1, num2, num3)