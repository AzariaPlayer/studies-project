/**
 * LOOPS:
 * 
 * 0: Loops function just like how they sound. While something is true
 * the loop will start from the beginning but keep track of whatever happened in the 
 * loop. You can count and even log with loops. But when the loop is false it will stop.
 * Lets go over some loops!
 * 
 */

// WHILE LOOP //
// Basically saying WHILE this condition is true ... run this code.
// So when the condition is not true anymore it will stop. 
// This loop is good to use when you dont know where the end point will be
    let i = 0;
    while(i < 5){
        console.log(i);
        i++; // DO NOT FORGET to either count up or down on the counter - it could result in an infinite loop and break the application
    } // will log 0, 1, 2, 3, 4

// FOR LOOP // ALSO FOR ARRAYS
// This loop is the most common for counting up or down
// You want to have a starting variable for the count, a condition,
// and most importantly the increment or decrement
    for(let i = 0; i < 5; i++){
        console.log(i);
    } // will log 0, 1, 2, 3, 4

// FOR IN // FOR OBJECTS
// In order to loop through object keys we have to use this
// loop rather than a regular for loop

    let person = {
        name: "azaria",
        age: 22
    }

    for(let key in person){
        console.log(key);
    } // will log 'name' and 'age