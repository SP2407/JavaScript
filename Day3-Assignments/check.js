console.log("Chek The Number is evenoe  or odd");

function check(b, ) {
    if (b % 2 == 0) {
        return `The Number ${b} is EVEN.`;
    } else {
        return `The Number ${b} is ODD.`;
    }
}
let a = prompt("Enter the number :");
let result = check(a);
console.log(result);