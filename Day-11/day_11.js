"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Q1) No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
*/
// • If the list is empty, print the message We need to find some users!
let userName = ['Fatir', 'Shayan', 'Farhan', 'Furqan', 'Admin', 'Talha', 'Babar'];
// • Remove all of the usernames from your array, and make sure the correct message is printed.
userName.splice(0, userName.length);
if (!(userName.length > 0)) {
    console.log(`We need to find some users`);
}
/*
Q2) Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.
*/
// • Make a list of five or more usernames called current_users.
let current_users = ['Fatir', 'Shayan', 'Farhan', 'Furqan', 'Talha', 'BaBar'];
//  Make another list of five usernames called new_users. Make sure one or two of the new 
// usernames are also in the current_users list.
let new_users = ['user1', 'user2', 'user3', 'user4', 'Talha', 'Babar'];
// • Loop through the new_users list to see if each new username has already been used.If it has, print a
//  message that the person will need to enter a new username.If a username has not been used, print a message
//  saying that the username is available.
// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.
// to save data in lowercase
// let lowercase_user: string[] = []
// for (let index = 0; index < current_users.length; index++) {
//     lowercase_user.push(current_users[index].toLowerCase())
// }
// some() check one value in complete array 
new_users.forEach(new_user => {
    if (current_users.some((currentUsers) => currentUsers.toLowerCase() === new_user.toLowerCase())) {
        console.log(`The username ${new_user} have already been taken. Please enter a new username`);
    }
    else {
        console.log(`Username ${new_user} is available.`);
    }
    // or
    // if (lowercase_user.includes(new_user.toLowerCase())) {
    //     console.log(`The username ${new_user} have already been taken. Please enter a new username`);
    // }
});
/*
Q3) Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal
 numbers end in th, except 1, 2, and 3.
*/
// • Store the numbers 1 through 9 in a array.
let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
// for (let index = 0; index < digits.length; index++) {
//     //  Use an if-else chain inside the loop to print the proper ordinal ending for each number.Your output
//     //  should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
//     if (digits[index] === 1) {
//         console.log(`${digits[index]}st`);
//     }
//     else if (digits[index] === 2) {
//         console.log(`${digits[index]}nd`);
//     }
//     else if (digits[index] === 3) {
//         console.log(`${digits[index]}rd`);
//     }
//     else {
//         console.log(`${digits[index]}th`);
//     }
// }
// or
digits.forEach(digit => {
    let suffix = 'th';
    if (digit === 1) {
        suffix = 'st';
    }
    else if (digit === 2) {
        suffix = 'nd';
    }
    else if (digit === 3) {
        suffix = 'rd';
    }
    console.log(`${digit}${suffix}`);
});
