console.log("Question 7");

function prime(b) {
    let n, c;
    console.log("Prime No are : ")
    for (let i = 2; i <= b; i++) {
        c = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                c++;
            }
        }
        if (c == 2) {
            console.log(i);
        }
    }

}

let a = Number(prompt("Enter the Number till you want prime Numbers : "));
prime(a);