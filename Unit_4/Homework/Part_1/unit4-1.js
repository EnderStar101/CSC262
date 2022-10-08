function reverseFor(x, y) {
    for (var i = x; i > 0; i = i - y) {
        console.log(i);
    }
}
function reverseWhile(x, y) {
    while (x > 0) {
        console.log(x);
        x = x - y;
    }
}
function evenCheck(x, y) {
    for (var i = x; i <= y; i++) {
        if (i % 2 == 0) {
            console.log(i, " is even.");
        }
        else {
            console.log(i, " is odd.");
        }
    }
}
reverseFor(90, 3);
console.log('\n');
reverseWhile(90, 3);
console.log('\n');
evenCheck(2, 100);
