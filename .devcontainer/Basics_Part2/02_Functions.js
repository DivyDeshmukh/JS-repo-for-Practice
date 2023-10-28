/*
// 1. When we do not know the number of arguments that will come
function  calculateCartPrice (...num1) {            // this is rest operator, yes it is similar to spread operator but difference is in their use cases
    return num1;
}

console.log((calculateCartPrice(200, 400, 500)));


// if there are other arguments as well then
function  calculateCartPrice (val1, val2, ...num1) {            // 1st and 2nd values will go into val1 and val2 and rest of the values will be in num1
    return num1;
}
console.log((calculateCartPrice(200, 400, 500, 2000)));
*/

/*
// 2. Accessing Objects in functions and passing them as arguments

//const user = {
  //  name: "Divy",
  //  age: 21,
//}

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

//handleObject(user);

// we can directly pass objects as arguments while calling the function

handleObject({
    name: "Divy",
    age: 21
});
*/

/*

// 3. Passing Arrays as arguments to functions
const arr = [1, 2, 4, 5, 43];

function handleArrays (array) {
    console.log(`The first element is ${array[0]} and the second element is ${array[1]}`);
}

handleArrays(arr);

//passing directly
//handleArrays([1, 2, 4, 5, 43]);

*/

/*
// 4. Global and Block Scope
// global scope refers to the outermost space or area outside the if or function blocks
// local scope or block scope refers to the area within the blocks (be it functions or if blocks)

// var has global and function scope but not block scope (that is not for if or loops)
// let and const has only block scope, by block we mean if or funct, or loops
let a = 5;                                  // let and var are declared in different scopes that is why no error

function add () {
    var a = 4;
    console.log(a);
}

console.log(add());
*/
