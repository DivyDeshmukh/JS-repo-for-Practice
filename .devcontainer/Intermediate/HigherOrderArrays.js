// Higher Order Loops

// 1. for..of

const arr = [1, 3, 5, 7, 9, 11]                         // for...of loop iterates over each value of an array
/*
for (const i of arr) {                                  // here, 'i' is the variable in which different values of array will come during each iteration
 //   console.log(i);
}
*/

/*
for (const [key, value] of arr) {               // error: arrays are not in key-value pairs and hence, cannot be destructured like this.
    console.log(key, value);
}
*/
/*
const string = "Divy"

for (const str of string) {                             // it will iterate over each character of string
    console.log(str);
}
*/


// 2. Map Cosntructor
const map = new Map();                              // Values must be unique and they will always be in proper order
map.set('Name: ', 'Divy')
map.set('age', 21)                                  // assigning values with set
map.set('id', 34343);
map.set('id', 12);                                  // this wiil override previous id value and id will come only once 
/*
//console.log(map.get('name'));                       // Accessing Map elements with get
//console.log(map.get('age'));
//console.log(map);

for (const i of map) {
    //console.log(i);
}


for (const i in map) {
    console.log(i);                                 // this will not return anything as forin is not appropriate for Map because it can only be applied to regular objects
}


// Printing key and values differently

for (const [key, value] of map) {               // this can be considered as destructuring of array
    console.log(key, ":-", value);
}

map.forEach ((val, index, arr) => {             // here index means key
    console.log(val, index, arr)//;
})

map.forEach ((val, index, [key, value]) => {             // to print in key value pair
    console.log(val, index, key + ": " + value)//;
})
*/

const obj = {
    0: "Divy",
    age: 21,
    id: 1144,
}

//for (const i of obj) {                          // when we directly try to use loops on objects then this will give an error that 'objects are not iterable'
 //   console.log(i);
//}

/*
for (const i of Object.entries(obj)) {          // Object.entries method will return an array and hence, arrays are iterable this is a way to iterate over objects
    console.log(i);                             // to iterate over only keys, we can use Object.keys(obj), and to iterate only over values we can use Object.values(obj)
}

// to make it more proper
for (const [key, value] of Object.entries(obj)) {          // Object.entries method will return an array and hence, arrays are iterable this is a way to iterate over objects
    console.log(key, ":-", value);                             // to iterate over only keys, we can use Object.keys(obj), and to iterate only over values we can use Object.values(obj)
}
*/

/*
// 3. for...in loop
for (const key in obj) {
    console.log(key, obj[key]);                             // it is used to iterate over keys of an object or indices of arrays, and we can access the values of that key by objectName[keyName], arrayName[index]
}

const arr = [1, 3, 4, 5, 7, 9]

for (const i in arr) {
    console.log(i, arr[i]);                                 
}
*/

/*
// 4. forEach Higher Order Functions

const arr = [1, 3, 4, 5, 7, 9]

arr.forEach (function (val, index, arr) {                   // forEach is higher order functions that accepts a callback function as an argument, and in that callback it has value, index, and array
    //console.log(val, index, arr);
});

arr.forEach ((val, index, arr) => {
    //console.log(val, index, arr);
});

function name (val, index, arr) {
    //console.log(val, index, arr);
}

arr.forEach (name);                                 // it is important to note that we are not calling the function, but we are giving its reference


// Using forEach in Array of Objects

const myCoding = [
    {
        name: "Divy",
        age: 21
    },

    {
        name: "Divfgsrwrwrtgwgwy",
        age: 261
    },

    {
        name: "wgwrgwrgwrgwgDivy",
        age: 421
    }
]

myCoding.forEach ((val) => {                        // val will represent every item i.e. every object inside myCoding array
    //console.log(val.name);
   // console.log(val["age"]);
})
*/
