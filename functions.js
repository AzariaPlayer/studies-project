/**
 * FUNCTIONS:
 * 
 * 0: Functions are VERY important in programming. It helps shorten you code, 
 * and stops your from repeating this over and over again. Its important to 
 * get used to using them so you can use them long term in your programs.
 * Lets go over some functions!
 * 
 */

// BASICS //
// Lets start with the basics. There are two things you need to make 
// and use a function. You need the actual word 'function' to let the system 
// know that you are going to make a function. And in order for you to see your
// function working, you need to call it
    function greet(){
        console.log('Hello'); // this is where you code what you want to happen
    };
    console.log(greet()); // we call the function by saying its name with some parenthesis 
    // everytime you call the function, the word 'Hello' will log to console because thats what you told it to do

// When you doing use the word 'return' inside of the code block, it will give you undefined.
// You can still log things to the console BUT functions should RETURN something. 

// PARAMETERS AND ARGUMENTS // 
// So notice in our greet function the parenthesis in the beginning are empty.
// Those are called PARAMETERS. They are placeholders for the values you want to use later when you 
// call the function. Lets make another one 
    function greetMe(name){ // name is just a place holder
        console.log('Hello ' + name);
    }
    console.log(greetMe("Azaria")); // <- the value you pass when calling the function are called ARGUMENTS
    // so this will log "Hello Azaria" to the console instead
    // the outcome depends on what you pass to the arguments

// SYNTAX //
// If you are not understanding the blue print of a function, here you go
//    function functionName(parameter-optional-){
//          // code blockm - what you want to happen when you call the function
//    }
//    functionName() <- This is how you call the function

// ASSIGNING A FUNCTION TO A VARIABLE
// You can also assign a function to a variable. A function can be used as a value as well.
// Lets use the greet function from above!
    let speak = greet(); 
    console.log(speak); // will log 'Hello' to the console

// SCOPES //
// Functions can access certain information depending on the scope they are in.
// Theres the global scope and the local scope.
// Global scope is the entire program. And local scope are things like functions and loops
    let outer = "global";

    function testScope() {
    let inner = "local";
    console.log(outer);  // THE INSIDE OF A FUNCTION CAN ACCESS THE OUTSIDE SCOPE
    }
    testScope();
    console.log(inner);  // THE OUTSIDE SCOPE CANNOT ACCESS THE INSIDE OF A FUNCTION
    // ALSO be careful using the keyword 'var'. It CANNOT be blocked scope. Meaning if might result in showing you
    // something in a scope you dont mean to have access too!!

// CLOSURES //
// A closure is a function that remembers the variables from where it was created — even after that scope has finished running.
// So its like HOLDING the variables for itself.
    function makeCounter() {
        let count = 0;
  
        return function() {
        count++;
        return count;
        };
    }
    let counter = makeCounter();
    console.log(counter); // will log 1
    // the count variable will be reassigned to its new value everytime you call it
    // this is also NOT a pure function because it changes a variable everytime it is called