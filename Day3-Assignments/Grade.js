console.log("Grade");

// Conditional Statement : IF-ELSE
function grade(b) {
    if (b >= 75 && b <= 100) {
        console.log("You have 'A' Grade");

    } else if (b >= 60 && b < 75) {
        console.log("You have 'B' garde");
    } else if (b >= 40 && b < 60) {
        console.log("You have 'c' garde");
    } else if (b > 100 || b < 0) {
        console.log("You Have Entered the Wrong Marks")
    } else {
        console.log("You Failed");
    }
}


// SWITCH Statement
function grade1(c) {
    switch (c) {
        case 75:
            console.log("You have 'A' Grade");
            break;
        case 60:
            console.log("You have 'B' garde");
            break;
        case 40:
            console.log("You have 'c' garde");
            break;
        default:
            console.log("Wrong Choice")

    }
}


//Ternary 
function grade0(d) {
    let res = (d >= 75 && d <= 100) ? 'You have A  Grade' :
        (d >= 60 && d < 75) ? 'You have B garde' :
        (d >= 40 && d < 60) ? 'You have c grade' :
        (d > 100 || d < 0) ? 'You enter wrong marks' :
        'You Failed';
    console.log(res);
}


let a = Number(prompt("Enter the marks between 0-100"));
grade(a); //For IF-ELSE 
grade1(a); // For SWITCH Statements
grade0(a);