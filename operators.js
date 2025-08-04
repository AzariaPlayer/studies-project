/**
 * OPERATORS:
 * 
 * 0: We use operators in jacascript in a similar way we would in a math equation. 
 * We can add, multiply, and so much more. But there are different category for each operator.
 * Lets go over them!
 * 
 */

// ASSIGNMENT //
// This is what we use to assign values to variable. Just like the variable initialization.
    let x = 5; 
    console.log(x); // logs 5 

// ARITHMETIC //
// This is what we use for math problems. You should be familiar with these.
    let add = 2 + 3;
    let subtract = 10 - 5;
    let multiply = 10 * 5;
    let divide = 10 / 5;

    // BUT YOU CAN ALSO ADD STRINGS
    // Depending on the data type, you can also add words together
        let nameFirst = "Azaria";
        console.log("Hello " + nameFirst); // "Hello Azaria"
        
// LOGICAL //
// Logical Operators only return boolean values. 
// There are 3 logical operators 

    // AND
    let test = 1 > 0 && 5 > 1 // BOTH conditions must be TRUE 
    console.log(test); // TRUE
    // OR 
    let testAgain = 1 > 0 || 10 === 0; // ONE needs to be TRUE
    console.log(testAgain); // TRUE
    // BANG
    console.log(!true); // FALSE - makes the condition false

// COMPARISON //
// You can use these the same way you would do a math problem. 
// But you can also compare strings and characters too
    let greater = 3 > 1;
    console.log(greater); // TRUE
    let less = 3 < 5;
    console.log(less); // TRUE

    // With comparison, this also includes the strictly equal and strictly NOT equal signs
        let a = 1 === 1; // compares the value and the data type
        console.log(a); // TRUE 
        let b = 1 !== '1';
        console.log(b); // TRUE

// UNARY //
// You can also find out the data types 
    console.log(typeof "hi"); // "string"

// TERNARY // 
// They are used to replace if...else 
    // looks like this 
    // condition ? valueIfTrue : valueIfFalse
    let age = 22;
    let canDrink = age >= 21? true : false;
    console.log(canDrink);
