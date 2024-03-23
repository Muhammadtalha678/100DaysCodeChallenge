// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple
// hobbies.It should log each hobby with a statement saying you enjoy that hobby.

function hobbies(...hobby: string[]) {
    // for (let index = 0; index < hobby.length; index++) {
    //     // const element = array[index];
    //     console.log(`I like ${hobby[index]}`);

    // }
    // or
    hobby.forEach(element => {
        console.log(`I like ${element}`);

    });

}
hobbies('Cricket', "Football")
hobbies('Tennis', "Hockey")

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your
// ideal day.Include at least three different activities.
// Using template literals to define a multiline string

let IdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

// Logging the multiline string to the console
console.log(IdealDay);

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and
//  refactor it into an arrow function.

// Take a simple function that calculates the area of a rectangle
function areaOfRectangle(length: number, width: number): number {
    return length * width
}
console.log(areaOfRectangle(20,40));

let rectangleArea = (length: number, width: number): number => length * width
console.log(rectangleArea(40,80));



