/*
console.log(Number(null));               //0
console.log(Number("Divy"));            //this will return NaN, and in case "" it will return 0            
console.log(Number(undefined));         //NaN
console.log(Number(true));              //1

console.log(String(34));                //"34"
console.log(String(null));              //"null"
console.log(String(undefined));         //"Undefined"
console.log(String(false));             //"false"

console.log(Boolean(21));               //returns true, and in case of 0 returns false
console.log(Boolean(""));               //in case of empty string "" it will return false and "divy" will return true
console.log(Boolean(null));             //false
console.log(Boolean(undefined));        //false

//Undefined() and Null() are not constructors, and this can be used as a point to say that not everything in js is an Object

//Implicit Type Conversions


num + str = str
num + boolean = num
num + null = num
num + undefined = NaN

performing operations with strings will only return strings

boolean + num = num
boolean + str = str
boolean + null = num
boolean + undefined = NaN

undefined + null = NaN
*/

//console.log(+true);  //converts boolean to number
//console.log(+false);
// when we enter an empty string inside Number(), then it will return 0.


