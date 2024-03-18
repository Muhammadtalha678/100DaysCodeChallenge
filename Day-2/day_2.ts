// Q1) Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//      Your output should look something like the following, including the quotation marks:
//      Albert Einstein once said, “A person who never made a mistake never tried anything new.”

console.log(`Tipu Sultan once said, "To live like a lion for a day is far better than to live for a hundred years like a jackal."`);

// Q2) Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called 
//     famous_person.Then compose your message and store it in a new variable called message.Print your message.
let famous_person: string = "Tipu Sultan"

let message = "To live like a lion for a day is far better than to live for a hundred years like a jackal."

console.log(`${famous_person} once said, "${message}"`);

// Q3) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of
//  the name.Make sure you use each character combination, "\t" and "\n", at least once.Print the name once, so the
//  whitespace around the name is displayed.Then print the name after striping the white spaces.

let person_name: string = "\n\tMuhammad Talha\t\n"
console.log(person_name);
console.log(person_name.trim());
