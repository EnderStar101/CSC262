function concatenate(arr) {
    var output = "";
    var temp;
    for (var i = 0; i < arr.length; i++) {
        output += arr[i];
        output += ' ';
    }
    return output;
}
var arr;
arr = ["I", "love", "Typescript", "!"];
var string = concatenate(arr);
console.log(string);
