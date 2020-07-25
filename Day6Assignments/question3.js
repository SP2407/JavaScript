console.log("Question 3");

var customerName = prompt("Please enter your name", " ");

if (customerName!= null) {

    document.getElementById("welcome").innerHTML = " Welcome" + customerName ;

}
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

// clock();

setInterval(clock,1000);

const dark = document.getElementById('dark');

dark.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}
