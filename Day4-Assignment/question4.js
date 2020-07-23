console.log("Question 4");

function operation(c, d) {
    let x = Number(prompt("Enter the operation You want to perform= (1,2,3,4,5,6) 1-> Addition, 2-> Substraction, 3-> Multiplication, 4-> Division, 5-> Squre root, 6-> Percentage "))

    switch (x) {
        case 1:
            console.log("Addition is " + (c + d));
            break;
        case 2:
            console.log("Substration is " + (c - d));
            break;
        case 3:
            console.log("Multiplication is " + (c * d));
            break;
        case 4:
            console.log("Division is " + (c / d));
            break;
        case 5:
            console.log("Squre Root is" + sqrt(c) + "and " + sqrt(d));
            break;
        case 6:
            let z = float((c / d) * 100);
            console.log("Percentege is " + z);
            break;
        default:
            console.log("Wrong choice")

    }

}

let a = Number(prompt("Enter the 1st Number : "));
let b = Number(prompt("Enter the 2nd Number : "));
operation(a, b);