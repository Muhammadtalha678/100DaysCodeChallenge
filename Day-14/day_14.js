"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Q1)Album:
*/
// Write a function called make_album(). The function should take in an artist name and an album title and 
// an optional parameter to make_album() that allows you to store the number of tracks on an album.
function make_album(artist_name, album_title, tracks) {
    // return a Object containing these two pieces of information  artist name and an album title
    let album = {
        name: artist_name,
        title: album_title,
    };
    // If the calling line includes a value for the number of tracks, add that value to the album’s Object
    if (tracks) {
        album.tracksNo = tracks;
    }
    // should return a Object 
    return album;
}
console.log(make_album("Artist 1", "First Album"));
// Make at least one new function call that includes the number of tracks on an album.
console.log(make_album("Artist 2", "Second Album", 10));
console.log("");
/*
Q2)Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let magicians_name = ["Magician 1", "Magician 2", "Magician 3"];
show_magicians(magicians_name);
console.log("");
/*
Q3)Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
  to see that the list has actually been modified.
*/
function make_great(magicians) {
    for (let index = 0; index < magicians.length; index++) {
        magicians[index] = `${magicians[index]} the great`;
        // or
        // magicians[index] = magicians[index] + " the Great";
    }
}
make_great(magicians_name);
show_magicians(magicians_name);
