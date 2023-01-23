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



console.log("EXERCISE 3:\n==========\n");
let frank = new Person("Frank", 0, "New York", ["Tv", "Sports"]);
let coder = new Coder("James", 4, "Mississippi", ["walking", "driving"], "Web-Developer");
coder.greeting();
coder.addHobby("reading");
coder.removeHobby("driving");
console.log(frank);
console.log(coder);

// I believe this is what I was instructed to do for exercise 3 
console.log("EXERCISE 4:\n==========\n");

class Calculator{
    constructor(){
        this.result = 0;
    }

    add(a,b) {
        let res;
        if(b === undefined) {
            res = this.result + a;
        } else {
            res = a + b;
        }
        this.result = res;
        return this.result;
    }

    subtract(a,b){
        let res;
        if(b === undefined){
            res = this.result - a;
        } else {
            res = a - b;
        }
        this.result = res;
        return this.result;
    }

    multiply(a,b) {
        let res; 
        if(b === undefined){
            res = this.result * a;
        } else {
            res = a * b;
        }
        this.result = res;
        return this.result;
    }

    divide(a,b){
        let res;
        if(b === undefined){
            res = this.result / a;
        } else {
            res = a / b;
        }
        this.result = res;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
}

let calc = new Calculator();
calc.add(1,1);
calc.display();
calc.subtract(8,4);
calc.display();
calc.multiply(3,2);
calc.display();
calc.divide(32,4);
calc.display();
calc.divide(32,4);
calc.add(2);
calc.multiply(2);
calc.divide(5);
calc.display();
