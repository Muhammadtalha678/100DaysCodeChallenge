// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year,
// and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "Lenovo",
    model: "X1 Carbon",
    year: "2015",
    describe: () => console.log(`Laptop: ${laptop.make} ${laptop.model} ${laptop.year}`)

}
laptop.describe()







//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with
// properties make model, and year, use array destructuring to assign the first and second laptops to variables.Then,
// log these variables.

// destructing mean [name1,name2] = names this will give [1] value to name1 and [2] value to name2
let laptops = [
    { brand: 'Dell', model: 'XPS 13', price: 1200 },
    { brand: 'Apple', model: 'MacBook Pro', price: 2000 },
    { brand: 'HP', model: 'Pavilion', price: 800 }
]
let [laptop1, laptop2] = laptops

console.log(laptop1);
console.log(laptop2);




// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of
// laptops.Use the spread operator to combine these arrays into a single array sorted in ascending order, then log
// the result.

const laptops1 = [1200, 800, 1500];
const laptops2 = [1000, 1350, 900];

const combinedLaptop = [...laptops1, ...laptops2]

combinedLaptop.sort((a, b) => a - b)
console.log(combinedLaptop);





// rest operator (...name) make array of different value in fuction
// spread operator p = [...a,...b] ...a =[1,2.3]
// In summary, this means that the rest operator is used to gather elements into an array, while the spread operator
// is used to spread the content of an array.

// function d(...d:number[]) {
//  console.log(d);
    
// }
// let r = [1, 2, 3, 4]
// d(1,2,3,4)


