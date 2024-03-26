"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newList = [];
// for (let index = 0; index < numbersList.length; index++) {
//     newList.push(numbersList[index] * 2)
// }
// newList = numbersList.map((number) => number * 2)
// console.log(newList);
newList = numbersList.map((number) => (number * 2));
console.log(newList);
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
let mixedItems = ['Cricket', 12, true, "TypeScript", "NextJS"];
let onlyStrings = mixedItems.filter((mixedItems) => typeof mixedItems === "string");
console.log(onlyStrings);
let grades = [90, 85, 65, 70, 95];
let totalGrades = 0;
grades.forEach(element => {
    totalGrades += element;
});
console.log(totalGrades / grades.length);
let ave = grades.reduce((previousValue, currentValue) => (previousValue + currentValue)) / grades.length;
console.log(ave);
