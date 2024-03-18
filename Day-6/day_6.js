"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Q1) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
 to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
 you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
  • Print a new set of invitation messages, one for each person in your list.
*/
let guests1 = ['Fatir', 'Shayan', 'Talha'];
console.log("I found a bigger dinner table");
// three more guests to invite to dinner.
// Add one new guest to the beginning of your array.
guests1.unshift("Farhan");
// Add one new guest to the middle of your array.
if (guests1.length % 2 === 0) {
    guests1.splice(guests1.length / 2, 0, "Furqan");
}
else {
    guests1.splice((guests1.length + 1) / 2, 0, "Furqan");
}
// Add one new guest to the end of your array.
guests1.push("Hammod");
for (const guest of guests1) {
    console.log(`${guest} you are inivited at dinner`);
}
console.log(`\n`);
/*
Q2) Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
*/
// • Start with your program from Exercise 1. Add a new line
//  that prints a message saying that you can invite only two people for dinner.
console.log("Iam inviting only two people for dinner");
console.log(`\n`);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
//   from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// for (let index = guests1.length - 1; index > 1; index--) {
//     console.log(`Sorry ${guests1.pop()}, I can't invite you to dinner`)
// }
// or or or
while (guests1.length > 2) {
    console.log(`Sorry ${guests1.pop()}, I can't invite you to dinner`);
}
console.log(``);
// • Print a message to each of the two people still on your
//  list, letting them know they’re still invited.
guests1.forEach(guest1 => {
    console.log(`${guest1} you are still invited  to dinner`);
});
console.log(``);
// • Remove the last two names from your list, so you have an
//  empty list. Print your list to make sure you actually have an empty list at the end of your program.
guests1.splice(0, guests1.length);
console.log(guests1);
/*
Q3) Seeing the World: Think of at least five places in the world you’d like to visit.
*/
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let locations = ['Makkah', 'Madina', 'Palestine', 'Egypt'];
// Print your array in its original order.
console.log('');
console.log("Original order: ", locations);
// Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order: ", [...locations].sort());
// Show that your array is still in its original order by printing it.
console.log("Original order: ", locations);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order: ", [...locations].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("Original order: ", locations);
// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log("Reverse  order: ", locations);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse();
console.log("Reverse  order Again: ", locations);
//  Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.
locations.sort();
console.log("Alphabetical order: ", locations);
//  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
// has changed.
locations.sort().reverse();
console.log("Reverse Alphabetical order: ", locations);
