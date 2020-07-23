console.log("Question1");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz at " + i);
    }
    if (i % 5 == 0) {
        console.log("Buzz at " + i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz at " + i);
    }
}