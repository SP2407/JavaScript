console.log("Question2");

const student = {
    name: "Helsiki",
    age: 24,
    projects: {
        DiceGame: "Two Player Dice game using java Script."
    }
}

const { name, age, projects: { DiceGame } } = student;

console.log(`Student name is '${name}'. His age is '${age}' and project is '${DiceGame}'`);