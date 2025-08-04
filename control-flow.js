/**
 * CONTROL FLOW:
 * 
 * 0: Control flow all depends on conditions. You want to run code 
 * when a condition is meet and when a condition is not meet. 
 * 
 */

// IF //
// The code inside the code block will only run if the condition is true
    let age = 22;
    if(age >= 21){
        console.log("Can Drink")
    }; // will log "Can Drink" to the console

// ELSE IF // 
// This will check if another condition is true if the other
// condition is false
    age = 20;
    if(age >= 21){
        console.log("Can Drink");
    } else {
        console.log("Cannot Drink");
    }; // will log "Cannot Drink" to the console

// ELSE //
// This will only run if none of the other conditions are true
    age = 20;
    if(age > 21){
        console.log("Can Drink");
    } else if(age = 21){
        console.log("You barely made it");
    } else {
        console.log("Cannot Drink")
    }; // will log "Cannot Drink"

// SWITCH //
// This is used to check a value over many different options.
// Depending on what is inputed, something will happen
// notice that when the match is found the code ends because of the break
    let favColor = "black";
    switch (favColor) {
        case "pink":
        console.log("I like pink too");
        break;
        case "yellow":
        console.log("Bright like the sun");
        break;
        case "orange":
        console.log("Orange is the color of itself");
        break;
        default:
        console.log("Um idk what to put for that color");
    } // will log "Um idk what to put for that color"
