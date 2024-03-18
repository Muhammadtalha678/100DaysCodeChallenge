"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Q1) Pizzas: Think of at least three kinds of your favorite pizza.Store these pizza names in a array,
    and then use a for loop to print the name of each pizza.
*/
//  Modify your for loop to print a sentence using the name of the pizza instead of printing just 
// the name of the pizza.For each pizza you should have one line of output containing a simple statement like I
//  like pepperoni pizza.
let fav_pizzas = ["Chicken Pizza", "Roman Pizza", "Hawaiian Pizza"];
for (let index = 0; index < fav_pizzas.length; index++) {
    console.log(`I like ${fav_pizzas[index]}`);
}
//  Add a line at the end of your program, outside the for loop, that states how much you like pizza.The output
//  should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
//  such as I really love pizza!
console.log("I really love Pizza!");
console.log("");
/*
Q2) Animals: Think of at least three different animals that have a common characteristic.
*/
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
let animals = ['Cat', 'Cow', 'Lion'];
for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
}
//  Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (let index = 0; index < animals.length; index++) {
    console.log(`A ${animals[index]} would make a great pet.`);
}
// Add a line at the end of your program stating what these animals have in common.You could print a 
// sentence such as Any of these animals would make a great pet!
console.log("Any of these animals would make a great pet!");
console.log("");
/*
Q3) T-Shirt:
*/
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed
//  on the shirt
function make_shirt(size, message) {
    // The function should print a sentence summarizing the size of the shirt and the message printed on it.
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it`);
}
//  Call the function.
make_shirt('large', 'Code Hacker');
