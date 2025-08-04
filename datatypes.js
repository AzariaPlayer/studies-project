/**
 * DATATYPES:
 * 
 * 0: In javaScript there are multiple data types. They are broken down into 
 * primitive and non-primitive types. There are different types because javaScript 
 * has different was of processing and interacting with them. Lets show you all the 
 * different types
 */

// PRIMITIVE //
// Primitive are basic, built in data types. They are not objects and they are stored 
// by value. Examples of primitive data types are below. These data types are also 
// passed by value. This means that the actual value is being copied. 

// Number //
// Number represents integers and floating points (decimals)
    let year = 2003;
    let price = 22.50;

// String // 
// Strings are immutable - meaning after created, you CANNOT change it. 
// Strings represent text
    let nameFirst = "Azaria";

// Boolean //
// A boolean can only be one of two things. It can be either 'true' or 'false'. That 
// is all a boolean is and can produce.
    console.log(1 > 2); // will log 'false'
    console.log(1 < 2); // will log 'true'

// Undefined //
// Undefined shows up usually when you declare a variable but dont give it a value
    let result;
    console.log(result); // undefined - no value was assigned to result

// Null //
// Null represents the absence of an value. But, you have to actual assign 'null' to
// a variable unlike undefined
    let a = null;

// Nan //
// Nan is a special numeric value and can fit in with the number data type
    let random = "hello" * 3; // trying to multiple a string and a number
    console.log(random); // Nan


// COMPLEX //
// Complex data types can hold multiple values. They are alway mutable, meaning you can 
// change and update the values. These data types are passed buy reference. So this means
// if you change something that is attached to the original object as well, the 
// original will also change

// Array //
// An array is a list of things. It can be a list of numbers, strings, and even objects.
// Also an array is a type of 'object' as well. 
    let list = [1, 2, 3, 4, 5];
    console.log(list); // will log [1, 2, 3, 4, 5]

// Object //
// An object is a collection of key value pairs
    let person = {
        name: "Azaria",
        age: 22
    }
    console.log(person); // will log the object including the name and age

// Function //
// A function is a block of code designed to perform a specific task. Its used to 
// avoid repetition throughout the code
    function greet(){
        console.log('Hello');
    }
    console.log(greet); // will log 'Hello' to the console

// Infinity and -Infinity //
// These are special numbers that represent values that are either too big or too small

// Infinity represents a number that is bigger than the other number
// This is also a primitive type of number
    console.log(1/0); // will log infinity

// -Infinity represents a number that is smaller than the other number
    console.log(-1/0); // will log -infinity