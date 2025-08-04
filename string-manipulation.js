/**
 * STRING MANIPULATION:
 * 
 * 0: With String Manipulation you can do plenty of things. You can join strings together, there are string methods,
 * and a few more things. Lets get started.
 * 
 */

// WITH OPERATORS //
// You can join strings together with the '+' sign. This is also called concating.
    let nameFirst = "Azaria";
    let nameLast = "Player";
    let fullName = nameFirst + " " + nameLast; 
    console.log(fullName); // "Azaria Player"

// TEMPLATE LITERALS //
// There is an even more visual pleasing way to concat things together. 
// Instead of using quotes and concat signs, you can use back ticks.
    // using the variables from above 
    fullName = `${nameFirst} ${nameLast}`; // using ${} to access the varibales
    console.log(fullName); "Azaria Player";

// STRING METHODS // 
// The most used string methods are toUpperCase() and toLowerCase();
    // still using the variables from above 
    console.log(nameFirst.toLowerCase()); // "azaria" - this makes everything lower cased 
    console.log(nameFirst.toUpperCase()); // "AZARIA" - this makes everything upper cased

    // INCLUDES // 
    // .includes is also a string method. It just checks if the given inforamtion if found
    // withing something.
    console.log(nameFirst.includes("a")); // TRUE

    // SLICE
    // The slide method basically removes a specific part of a value
    // When using slice - .slice(start, stop) - is how you should reference what you
    // want to cut out
    console.log(nameFirst.slice(1, 3)); // "za"

    // SPLIT //
    // You can also split strings into an array
    console.log(nameFirst.split('')); // ["A","z","a","r","i","a"]

    // REPLACE // 
    // You can use the .replace() method if you want to replace a part of a string.
    // You can use this as a reference .replace(old, new);
    console.log(nameFirst.replace("A", "a")); // "azaria"

