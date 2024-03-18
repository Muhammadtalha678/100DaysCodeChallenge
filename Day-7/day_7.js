"use strict";
/*
Q1) Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
number of people you are inviting to dinner.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let bigger_guest_table = ['Farhan', 'Fatir', 'Furqan', 'Shayan', 'Talha'];
console.log(`Iam inviting ${bigger_guest_table.length} guest to the Dinner`);
/*
Q2) Think of something you could store in a array. For example, you could make a list of mountains, rivers,
 countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these
  items.
*/
let mountains = ['K2 Mountain', 'Nanga Parbat Mountain', 'Saltoro Kangri Mountain'];
console.log("These are the famous Mountain in Pakistan: ", mountains);
/*
Q3) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing
 these items.
*/
let mySelf = {
    name: "Muhamad Talha",
    age: "24",
    education: "Masters in Computer Science (MCS)",
    courses: "Cloud Applied GenAi Engineer",
};
console.log(`My name is ${mySelf.name}, Iam ${mySelf.age} years old, I have complete ${mySelf.education} from 
University of Karachi and cureently enrolled in ${mySelf.courses} course.`);
