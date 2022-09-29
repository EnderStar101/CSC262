function swap(n1, n2) {
    var temp;
    console.log(n1, ' ', n2);
    temp = n1;
    n1 = n2;
    n2 = temp;
    console.log(n1, ' ', n2);
}
function compare(n1, n2) {
    console.log("n1 is greater than n2: ", n1 > n2);
    console.log("n1 is less than or equal to n2: ", n1 <= n2);
    console.log("n1 is not equal to n2: ", n1 != n2);
}
function concant() {
    var str1 = "I";
    var str2 = "love";
    var str3 = "Typescript!";
    console.log(str1 + ' ' + str2 + ' ' + str3);
}
function valueCheck(n1) {
    if (n1 > 0) {
        console.log("The value stored in n1 is positive.");
    }
    else if (n1 < 0) {
        console.log("The value stored in n1 is negative.");
    }
    else {
        console.log("The value stored in n1 is 0.");
    }
}
function weekCheck(n1) {
    var day;
    switch (n1) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "N/A";
    }
    console.log(day);
}
console.log('\n');
var n1 = 5;
var n2 = 2;
swap(n1, n2);
console.log('\n');
compare(n1, n2);
console.log('\n');
concant();
console.log('\n');
valueCheck(n1);
console.log('\n');
weekCheck(n1);
