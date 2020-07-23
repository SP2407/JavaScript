console.log("Question 1");

let a = prompt("Enter the How many numbers you want : ");
let arr = [];

for (let i = 0; i < a; i++) {
    arr[i] = prompt("Enter the Number : ")
}

console.log(arr);

let odd = arr.filter(el => el % 2 != 0);
console.log("Odd Numbers are -: " + odd);

let cube = arr.filter(el => el % 2 != 0).map(el => el ** 3);
console.log("Cubes are -: " + cube);