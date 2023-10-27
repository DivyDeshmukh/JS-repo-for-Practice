// Immediately Invoked Function Expressions
//  It is a common JavaScript design pattern used to create a self-contained scope and execute a function immediately after its declaration.

// An IIFE is defined as a function expression wrapped in parentheses followed by an additional set of parentheses that invoke the function immediately.
/*
(function () {
    console.log("Hello, world!");
})()

IIFE is often used to encapsulate code and create a private scope to prevent polluting the global scope with variables and functions.
It's a way to avoid naming conflicts and maintain clean, modular code. */
/*
(function () {
    console.log("Hello, world!");
})();                                   // here, ; is very necessary because IIFE do not know where to stop its execution context

( (name) => {
    console.log(`Hello, ${name}!`);     // Passing arguments to the IIFE
})("Divy");

const result = (() => {
    return ("Hey there!");              // returning values from IIFE
});

console.log(result());
*/




