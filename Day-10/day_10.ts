/*
Q1) Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for 
the variable age, and then:
*/
let person_age: number = 24
// If the person is less than 2 years old, print a message that the person is a baby.
if (person_age < 2) {
    console.log('Person is a baby.');

}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (person_age >= 2 && person_age < 4) {
    console.log('Person is a toddler.');

}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
if (person_age >= 4 && person_age < 13) {
    console.log('Person is a kid.');

}
//  If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
if (person_age >= 13 && person_age < 20) {
    console.log('Person is a teenager.');

}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
if (person_age >= 20 && person_age < 65) {
    console.log('Person is a adult.');

}
// If the person is age 65 or older, print a message that the person is an elder.
if (person_age >= 65) {
    console.log('Person is a elder.');

}
/*
Q2) Favorite Fruit: Make a array of your favorite fruits, and then write a series
 of independent if statements that check for certain fruits in your array.
*/
// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ['Apple', 'Banana', 'Cherry']
// Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes("Apple")) {
    console.log(`I really like Apple!.`);

}
if (favorite_fruits.includes("Banana")) {
    console.log(`I really like Bananas!.`);

}
if (favorite_fruits.includes("Cherry")) {
    console.log(`I really like Cherry!.`);

}
/*
Q3) Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
 that will print a greeting to each user after they log in to a website. Loop through the array, and print a
  greeting to each user:
*/
let userName: string[] = ['Fatir', 'Shayan', 'Farhan', 'Furqan', 'Admin', 'Talha', 'Babar']
// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
// report ?
userName.forEach(user => {
    if (user === 'Admin') {
        console.log("");
        console.log(`Hello ${user}, would you like to see a report ?`);
        console.log("");
    }

    // • Otherwise, print a generic greeting, such as 
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);

    }
});
/*
Q3) 
*/