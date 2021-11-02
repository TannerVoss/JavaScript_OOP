console.log("\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info() {
        console.log(`This is ${this.name}, they have ${this.pets} pet(s), and live in ${this.residence}, and enjoys ${this.hobbies}`);
    }

    greeting(name) {
        console.log(`Happy Halloween ${name}!`);
    }
}
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);

        this.occupation = "Full Stack Web Developer";
    }
    greeting(name) {
        console.log(`${name}, we overwrote the previous greeting! I am a ${this.occupation}`);
    }
}

let Tanner = new Coder("Tanner", 1, "Frederick, CO", "hiking");
let Walter = new Coder("Walter", 1, "North Hollywood, CA", ["bowling", "&", "ranting"]);
let Jeffrey = new Coder("Jeffrey", 0, "Venice, CA", "bowling");

console.log(Tanner.info());
console.log(Walter.info());
console.log(Jeffrey.info());

Tanner.greeting(Tanner.name);
Walter.greeting(Walter.name);
Jeffrey.greeting(Jeffrey.name);

/*
new Person("name", pets, "residence", "hobbies") {

} */