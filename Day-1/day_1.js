"use strict";
//Q2) Personal Message: Store a person’s name in a variable, and print a message to that person.Your message should be
// simple, such as, “Hello Ashraib, would you like to learn some TypeScript today ?”
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Muhammad Talha";
console.log(`“Hello ${personName}, would you like to learn some TypeScript today?”`);
// Q3) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//  and titlecase.
let personName1 = "muhammad tAlha governoR HOUSe";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
function toTitleCase(word) {
    let titleCase = "";
    for (let index = 0; index < word.length; index++) {
        if (index === 0) {
            titleCase += word[index].toUpperCase();
        }
        else if (word[index - 1] === " ") {
            titleCase += word[index].toUpperCase();
        }
        else {
            titleCase += word[index].toLowerCase();
        }
    }
    console.log(titleCase);
}
toTitleCase(personName1);
