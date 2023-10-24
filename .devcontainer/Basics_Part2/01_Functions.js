// 1. Function Definition
/*
function functionName () {
    console.log("My name is Divy");
}

functionName;           // this is function reference that is it points to the memory location where the function's code is stored
functionName();         // this is function execution which will run the code within the function
*/

/*
// 2. The return Keyword

function add (num1, num2) {        // variables inside () of function are called as function parameters
    let result = num1 + num2;
    return result;
    //return num1 + num2;           // this is another way we can use return
}

add (3, 6);                 // return statement will return a value that must be stored in a variable to use it later
let ans = add (3, 6);       // ans will contain the value returned by add i.e. num1+num2
console.log(ans);

*/
//we can also use return like this
/*
function display (username) {
    return `${username} just logged in`;
}

console.log(display("Divy"));               // Divy just logged in
console.log(display());                     // undefined just logged in
*/

// to deal with undefined case

/*
function display (username) {

    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`;
}

display ();             // o/p:- Please enter a username


//another way to deal with undefined case

function display (username = "Divy") {              // Giving default values to function parameter
    return `${username} just logged in`;
}

console.log(display());                  // o/p:- Divy just logged in
console.log(display("Khushi"));          // o/p:- the default will be overrided and o/p:- khushi just logged in

*/


