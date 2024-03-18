/*Q1)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.If you don’t have
anything specific to write because your programs are too simple at this point, just add your name and the current
date at the top of each program file.Then write one sentence describing what the program does.*/

// Muhammad Talha, 17/03/2024
// This Program prints my name and date (Sun Mar 17 2024 01:37:36 GMT+0500 (Pakistan Standard Time))
console.log(`My name is Muhammad Talha and the date is ${Date()}`);

/*Q2) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing 
each element in the list, one at a time.*/
let friends: string[] = ['Farhan', 'Furqan', 'Talha', 'Hammod']
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index]);
}

/*Q3) Greetings: Start with the array you used in Exercise 2, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized with
the person’s name. */
for (let index = 0; index < friends.length; index++) {
    console.log(`My firend name is ${friends[index]}`);
}
