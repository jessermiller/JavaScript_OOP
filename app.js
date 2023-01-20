console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
       this.name = name;
       this.pets = pets;
       this.residence = residence;
       this.hobbies = hobbies;
    }
    addHobby(hobby){
       this.hobbies.push(hobby);
    }
    removeHobby(rmhobby){
     this.hobbies = this.hobbies.filter((hobby) => hobby != rmhobby);
    }
    greeting(){
        console.log('Hello fellow person!');
    }
}
let person = new Person("Jeff", 1, "Mississippi", ["running", "biking", "swimming"]);
person.removeHobby("swimming");
person.addHobby("fishing");
person.greeting();
console.log(person);


console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
       super(name, pets, residence, hobbies);
        this.occupation = occupation;
    }
    greeting(){
        console.log("Hello I code!!");
    }
}

let coder = new Coder("James", 4, "Mississippi", ["walking", "driving"], "Web-Developer");
coder.greeting();
console.log(coder);


console.log("EXERCISE 3:\n==========\n");







console.log("EXERCISE 4:\n==========\n");
