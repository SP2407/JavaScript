console.log("Question 3");

let users = [{
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        complete: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    }, {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
]

function getUsers() {
    setTimeout(() => {
        let result = '';
        users.forEach(user => {
            result += `The user is ${user.title} \n`;
        });
        console.log(result);
    }, 1000);
}

// Promise
function createUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Oops an error occured");
            }

        }, 3000);
    })
}

createUser({ name: 'Denver', email: 'd@gmail.com' })
    .then(getUsers)
    .catch(error => console.log(error));