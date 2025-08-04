/**
 * VARIABLES:
 * 
 * 0: A variable is like a labeled box that holds specific information on the inside. So in programming, 
 * we use variables to hold information for us. We name the variables based on the information they will 
 * contain. Lets go over some important things bout variables below.
 * 
 */
 
// Declaration //
// 1. Variables can be declared in 3 ways. The original way to declare a variable was to use the keyword "var".
// Without using a keyword to declare a variable, you cannot grab the information you are trying to get. 
// So to declare a variable we need to do something like this. 
 
    var name; // here we have declared a variable with the keyword "var" and gave it a name of "name"

// But what happens when you try to log that variable to the console?
    console.log(name); // This will log undefined because there is no value given after the declaration.

// How do you give a variable a value? 

// Initialization/Assignment //
// 2. When you want to give a variable a value, this is called initializing 

    name = "Azaria"; 
    console.log(name); // now this will log "Azaria";

/* Along with the keyword "var", there is also "let" and "const"
*  "let" is now like the replacement of "var". 
*  "const" stands for constant and is also used for variable declaration.
*/

// Re-Assignment //
// 3. You can re-assign variables and give them different values. You can do this for "var" and "let".
// But you cannot do this for "const". "const" CANNOT be re-assigned. 

    var color = "black";
    color = "green";
    console.log(color); // this will log "green"

    let coin = "penny";
    coin = "quarter";
    console.log(coin); // will log "quarter"

    const age = 22;
    age = 23;
    console.log(age); // will give you an error

// Hoisting //
// 4. The keyword "var" can be logged before it is declared. Although, it will only hoist the declaration and not the value assigned to it.
// This is because javascript will hoist the declaration to the top of the scope.

    console.log(game); // will log undefined 
    var game = "tik-tak-toe";

// The keywords "let" and "const" CANNOT do this. You can only call/log the variables after the declaration.