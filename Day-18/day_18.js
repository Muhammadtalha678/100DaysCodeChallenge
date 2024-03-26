"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include
// its brand, model, and other key features like how much storage it has, the size of its screen, and how long
// its battery lasts.
let smartPhone = {
    brand: "Motrolla",
    model: "Moto g Power",
    specification: {
        storage: "64gb",
        screenSize: "6.6 inches",
        batteryLife: "1 day",
    }
};
console.log(smartPhone);
console.log(smartPhone.brand);
console.log(smartPhone.model);
console.log(smartPhone.specification.batteryLife);
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a
//  computer programmer knows, like coding languages, tools, and software frameworks.Find a way to get three
//  specific skills from this list and show them.
let skills = {
    coding_languages: ['python', 'typescript', 'php'],
    tools: ['git', 'postman', 'github'],
    software_frameworks: ['laravel', 'angular', 'flutter'],
};
let { coding_languages, tools, software_frameworks } = skills;
console.log(`Coding Languages:${coding_languages[0]}, Tools:${tools[0]}, Software Frameworks:${software_frameworks[0]}`);
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each
//  section based on what you need at that moment, like adjusting labels based on user choices.
let flexibleObjects = {};
flexibleObjects["name"] = "Tslhs";
flexibleObjects["age"] = "23";
console.log(flexibleObjects);
