/*
Q1) Unchanged Magicians
*/
// . Call the function make_great() with a copy of the array of magicians’ names.
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]) {
    // Because the original array will be unchanged, return the new array and store it in a separate array.
    let modeifedArray: string[] = []
    for (let index = 0; index < magicians.length; index++) {
        // the Great added to each magician’s name.
        modeifedArray.push(magicians[index] + " the great")
    }
    return modeifedArray
}
let magicians_name: string[] = ["Magician 1", "Magician 2", "Magician 3"]
// store it in a separate array.
let greatMagician: string[] = make_great(magicians_name)
// Call show_magicians() with each array to show that you have one array of the original names and one array
// with the Great added to each magician’s name.

console.log("Original Magicians:");
show_magicians(magicians_name) //original names
console.log("Great Magicians:");
show_magicians(greatMagician) //Great added to original names
console.log("");

/*
Q2)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
 have one parameter that collects as many items as the function call provides, and it should print a summary of 
 the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/
function sandwich(...items: string[]) {
    console.log("Making a sandwich with: " + items.join(', '));

}
sandwich('item 1', 'item 2')
sandwich('item 3', 'item 4', 'item 5')
sandwich('item 6', 'item 7', 'item 8', 'item 9')
console.log("");

/*
Q3)Cars:
*/
// function Car(manufacturer:string,model:string) {

// }
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: any = { manufacturer, model };

    options.forEach(([key, value]) => {
        car[key] = value
    });

    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"] , ["year", 2020] ));
console.log(make_car("Ford", "Fiesta", ["color", "blue"] , ["sunroof", true] ));
