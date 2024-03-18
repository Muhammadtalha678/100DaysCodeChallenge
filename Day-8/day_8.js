"use strict";
/*
Q1) Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one
 happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before
closing the program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let mountains1 = ['K2 Mountain', 'Nanga Parbat Mountain', 'Saltoro Kangri Mountain'];
console.log(mountains1[3]); //Change an index in one of your programs to produce an index error
console.log(mountains1[2]); //Make sure you correct the error before closing the program.
/*
Q2) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
 prediction for the results of each test. Your code should look something like this:
  • Look closely at your results, and make sure you understand why each line evaluates to True or False.
  • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
// True Tests:
let cars = 'subaru';
console.log("Is cars == 'subaru'? I predict True.");
console.log(cars == 'subaru'); // true
console.log("Is cars === 'subaru'? I predict True.");
console.log(cars === 'subaru'); // true
console.log("Is cars != 'honda'? I predict True.");
console.log(cars != 'honda'); // true
console.log("Is cars !== 'honda'? I predict True.");
console.log(cars !== 'honda'); // true
console.log("Is cars.includes('sub')? I predict True.");
console.log(cars.includes('sub')); // true
// False Tests:
console.log("Is cars == 'honda'? I predict False.");
console.log(cars == 'honda'); // false
console.log("Is cars === 'honda'? I predict False.");
console.log(cars === 'honda'); // false
console.log("Is cars != 'subaru'? I predict False.");
console.log(cars != 'subaru'); // false
console.log("Is cars !== 'subaru'? I predict False.");
console.log(cars !== 'subaru'); // false
console.log("Is cars.includes('ford')? I predict False.");
console.log(cars.includes('ford')); // false
/*
Q3) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
more comparisons, write more tests. Have at least one True and one False result for each of the following:
*/
// • Tests for equality and inequality with strings
let fruits = 'apple';
console.log("Is fruits not equal to 'banana'? I predict True.");
console.log(fruits != 'banana'); // true
console.log("Is fruits equal to 'Apple'? I predict False.");
console.log(fruits == 'Apple'); // false
// Tests using the lower case function
let city = 'New York';
console.log("Is city lowercase equal to 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // true
console.log("Is city lowercase not equal to 'new york'? I predict False.");
console.log(city.toLowerCase() != 'new york'); // false
//  Numerical tests involving equality and inequality, greater than and less
// than, greater than or equal to, and less than or equal to
let x = 10;
let y = 5;
console.log("Is x greater than y? I predict True.");
console.log(x > y); // true
console.log("Is x less than or equal to y? I predict False.");
console.log(x <= y); // false
// • Tests using "and" and "or" operators
let age = 25;
let isStudent = false;
console.log("Is age greater than 18 and isStudent true? I predict False.");
console.log(age > 18 && isStudent); // false
console.log("Is age greater than 18 or isStudent true? I predict True.");
console.log(age > 18 || isStudent); // true
// • Test whether an item is in a array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the array? I predict True.");
console.log(numbers.includes(3)); // true
console.log("Is 6 in the array? I predict False.");
console.log(numbers.includes(6)); // false
// • Test whether an item is not in a array
let colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' not in the array? I predict True.");
console.log(!colors.includes('yellow')); // true
console.log("Is 'red' not in the array? I predict False.");
console.log(!colors.includes('red')); // false
