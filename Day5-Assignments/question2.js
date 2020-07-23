console.log("Question 2");

class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.Coins = 0;
        this.courses = [];
    }
    login() {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout() {
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User {
    constructor(name, age, email) {
        super(name, age, email);

    }

    addCoins() {
        this.Coins++;
        console.log(`${this.name} has ${this.Coins} coins`);
        return this;
    }
    removeCoins() {
        this.Coins--;
        console.log(`${this.name} has ${this.Coins} coins`);
        return this;
    }

}

class Admin extends Moderator {

    addCourse(user, course) {
        user.courses.push(course);
        console.log(user);
    }

    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

let user1 = new User('Saurabh', 24, 'saurabhh@gmail.com');
let user2 = new User('Apurv', 20, 'Apurv@gmail.com');
let user3 = new User('Onkar', 21, 'onkar@gmail.com');

let mod = new Moderator('Saurabh', 24, 'saurabhh@gmail.com');

let ad = new Admin('Saurabh', 24, 'saurabhh@gmail.com');

let user = [user1, user2, user3];

user.forEach(el => {
    console.log(el);
});

user1.login()
mod.addCoins();
mod.addCoins();
mod.addCoins();
mod.removeCoins();
ad.addCourse(user1, 'JS');
user1.logout()