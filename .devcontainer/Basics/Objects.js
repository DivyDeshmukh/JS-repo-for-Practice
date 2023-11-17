//different ways to create objects
//1. Object Literal Notation


const mySym = Symbol ("key1");

let obj = {
    name: "Divy Deshmukh",                  //by default the prop. on left side are also stored as strings
    "age": 21,
    course: "Computer Science",
    method: function () {
        console.log("Hey there!");
    },
    [mySym]: "myKey1",               // square brackets to declare symbols

}

obj.age = 22;                        //changing object values

// console.log(obj.name);
 console.log(obj['age']);            // cannot be accessed with . as obj.age above is given in string, but it is important to note that if the property name contains only one string then we can access it using the dot notation and if it contains multiple ("my age"), then it can only be accessed by['']
// console.log(obj.method());
// console.log(obj[mySym]);            //symbol can be accessed by []

// //Object.freeze(obj);                 //this will not allow us to change the prop and methods of object obj.
// obj.name = "Khushi";
// console.log(obj);


// obj.greeting = function () {           //declaring greeting method as property for obj, and obj.greeting contains reference of this anonymous function
//     console.log(`How are you ${this.name}`);    //this here refers to the current object
// }

// console.log(obj.greeting);              //returns funcion anonymous because here passing reference not executing the method
// console.log(obj.greeting());



//2. Object.create()                            // this will create a singleton object
/*
const personPrototype = {
    name: "xyz",
    age: 0,
}

const obj1 = Object.create (personPrototype);           // in place of new this create method can be used
obj1.name = "Divy";                                     // obj1 will inherit the properties of personPrototype
console.log(obj1);                          // it is important to note that this will return an empty object bcoz obj1 do not directly inherit or copy prop. and methods of obj, instead obj acts as an prototype for the obj1
console.log(obj1.name);                     // now, this will search for the name inside obj1 and after not finding that it will search in the prototypal chain of obj1
*/

/*
3. // accessing nested objects

let obj = {
    fullname: {
        firstName: "Divy",
        lastName: {
            lname: "Deshmukh",
        }
    },
}

console.log(obj.fullname.firstName);
console.log(obj.fullname.lastName.lname);
console.log(obj.fullname?.lastName.lname);             // Optional Chaining when we don't know whether fullname exists or not


//4. Merging Objects with Object.assign()

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2};                 // this will return objects in objects

//const obj3 = Object.assign({}, obj1, obj2);          // using {} is optional it will anyway return the object and assign it to obj3
// The Object.assign() method in JavaScript is used to copy the values of all enumerable own properties from one or more source objects to a target object. When multiple source objects have properties with the same name, only the last occurrence of each property is copied into the target object. The properties are not repeated; instead, the values from the last object specified in Object.assign() overwrite the earlier values.
//const obj3 = Object.assign(obj3, obj1, obj2);     // that is another syntax in object.assign()
console.log(obj3);

*/

/*
// 5. Merging objects with spread operator
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2};
console.log(obj3);
// The spread operator does not repeat or include multiple occurrences of properties with the same name when merging objects. It includes the last occurrence of each property in the resulting merged object. Incorrect.
/* Certainly! When creating a new merged object by using `Object.assign()` or the spread operator (`...`):

1. **New Object Creation:**
   - A new object is created by merging properties from source objects.
   - This new object resides in memory (typically in the heap).

2. **Reference in Variable:**
   - The variable holds a reference to this newly created object.
   - This variable is stored in the stack memory.

3. **Shallow Copy Behavior:**
   - For properties that are primitives or references to other objects (like nested objects or arrays):
     - A shallow copy occurs, copying references to nested objects or arrays, not duplicating them.
     - Changes made to nested objects within the new object may affect the corresponding nested objects in the source objects because they share references.

Remember, changes to nested objects within the newly merged object might affect the source objects
if they share references due to the shallow copy behavior.
However, the newly merged object itself is separate from the source objects.
*/

// 6. Declaring objects with constructor functions

//const obj = new Object();  //empty object it is similar to const obj = {}
// const obj = new Object ({name: "divy", age: 21});            // we can do same with arrays as well

// adding properties and methods to the empty object obj

//obj.name = "Divy";
//obj.greeting = function () {
//    console.log("Hello, world!");
//}
//console.log(obj.greeting());
// we can pass object as an argument to the Object Construtor
/*
const obj = new Object ({
    name: "Divy",
    age: 21,
});

console.log(obj);
*/
//we can also create them by using constructor functions and this context that we have covered later

// 7. Array of Objects
/*
const arrOfObj = [              // basically it is an array of objects
    {
        name: "Divy",
    },

    {
        age: 21,
    }

];

console.log(arrOfObj[0].name);          //accessing properties of objects inside the array
*/

/*
// 8. Converting Objects into an array
const obj = {
    name: "Divy",
    age: 21,
    course: "Computer Science",
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));               // returns array of individual arrays of [key , value] pairs
*/

/*
// 9. Destructuring Objects

const obj = {
    name: "Divy",
    age: 21,
}

const {name, age} = obj;                    // now, we don't have to write obj.name, obj.age again, we can directly use name and age.

console.log(name);
console.log(age);

// we can change the name of properties as well

const {name: firstName, age: aayu} = obj;

console.log(firstName);
console.log(aayu);

// if the value of a property is not known then we can set it to "Unknown"

const {city = "Unknown"} = obj;

// 10. Deleting Object Properties
let obj = {
    name: "divy",
    age: 21,
}

delete obj.name;                            // delete can only be used to delete properties and methods of an objects and not variables
console.log(obj.name);

*/

/*
// 11. Creating objects with class [it is same as constructor just a syntactic sugar over it]

class abc {
    constructor (name, age, course) {
        this.n = name;                              // It is important to note that this properties or method names can be anything and it need not to be same as that of the names of parameters passed inside the constructor function
        this.a = age;
        this.c = course;

    }
}

const obj = new abc ('Divy', 21, 'computer science');
console.log(abc);
console.log(obj);
console.log(obj.n);
console.log(obj.a);

*/

// 12. Creating objects using factory functions and encapsulating private data and methods
function fun (name, age, course) {

    const param = 54;

    function method () {
        console.log('Hey there! This is a method.');
    }

    const obj = {
        name: name,
        age: age,
        course: course,
        val: param,
        getMethod: method,
    };

    return obj;
}

const a = fun('Divy', 21, 'computer science');
console.log(a.getMethod());
// console.log(a.method());

