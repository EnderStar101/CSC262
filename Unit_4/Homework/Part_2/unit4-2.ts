function concatenate(arr:string[])
{
    let output:string = ""
    let temp:string

    for (let i:number = 0; i < arr.length; i++)
    {
        output += arr[i]
        output += ' '
    }

    return output
}

let arr:string[]

arr = ["I", "love", "Typescript", "!"]

let string = concatenate(arr)

console.log(string)