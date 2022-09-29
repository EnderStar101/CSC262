// Exercise 1
var a = 2;
var b = 8;
var x = a / b;
console.log(x);
console.log('\n');
// Exercise 2
var str1 = "My name is ";
var str2 = "Michael.";
var str3 = str1 + str2;
console.log(str3);
console.log('\n');
// Exercise 3
if (a > 0) {
    console.log("a is a positive number.");
}
else if (a < 0) {
    console.log("a is a negative number.");
}
else {
    console.log("a is equal to zero.");
}
console.log('\n');
// Exercise 4
if (b % 2 == 0) {
    console.log("b is an even number");
}
else {
    console.log("b is an odd number");
}
console.log('\n');
// For fun
var c = 4;
var array = [a, b, c];
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < 2; j++) {
        if (array[j] < array[j + 1]) {
            var temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log(array);
