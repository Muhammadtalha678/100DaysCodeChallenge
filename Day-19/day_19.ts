// Question 55: Double Numbers in an Array: Make a list of numbers.Then, use a trick to make a new list where each
// number is twice its original value.
let numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newList: number[] = []
// my method

// for (let index = 0; index < numbersList.length; index++) {
    //     newList.push(numbersList[index] * 2)
    
    // }
    // newList = numbersList.map((number) => number * 2)
    
    // console.log(newList);
    
// teacher method

newList = numbersList.map(
    (number) => (number * 2)

);

console.log(newList);

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// my method
// function mixedItems(...items:any[]) {
    //     let onlyStrings: string[] = []
//     items.forEach(element => {
//         if (typeof element === "string" ) {
    //             onlyStrings.push(element)
//         }
//     });
//     console.log(onlyStrings);

// }
// mixedItems("items1",2,4)

// teacher method
let mixedItems = ['Cricket', 12, true, "TypeScript", "NextJS"]
let onlyStrings = mixedItems.filter((mixedItems) => typeof mixedItems === "string")
console.log(onlyStrings);


// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

let grades = [90, 85, 65, 70, 95]
// my method
let totalGrades: number = 0
grades.forEach(element => {
    totalGrades += element
});
console.log(totalGrades / grades.length);

// teacher method
let ave = grades.reduce((previousValue: number, currentValue: number) => (previousValue + currentValue)) / grades.length
console.log(ave);

