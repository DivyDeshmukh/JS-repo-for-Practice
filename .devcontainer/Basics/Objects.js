//different ways to create objects
//1. Object Literal Notation


/*
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

console.log(obj.name);
console.log(obj["age"]);            // cannot be accessed with . as obj.age above is given in string
console.log(obj.method());
console.log(obj[mySym]);            //symbol can be accessed by []

//Object.freeze(obj);                 //this will not allow us to change the prop and methods of object obj.
obj.name = "Khushi";
console.log(obj);


obj.greeting = function () {           //declaring greeting method as property for obj, and obj.greeting contains reference of this anonymous function
    console.log(`How are you ${this.name}`);    //this here refers to the current object
}

console.log(obj.greeting);              //returns funcion anonymous because here passing reference not executing the method
console.log(obj.greeting());

*/

//2. Object.create()                            // this will create a singleton object
/*
const personPrototype = {
    name: "xyz",
    age: 0,
}

const obj1 = Object.create (personPrototype);           // in place of new this create method can be used
obj1.name = "Divy";                                     // obj1 will inherit the properties of personPrototype
console.log(obj1.name);
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
                 
//const obj3 = Object.assign(obj3, obj1, obj2);     // that is another syntax in object.assign()
console.log(obj3);

*/

/*
// 5. Merging objects with spread operator
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2};
console.log(obj3);

*/

// 6. Declaring objects with constructor functions

//const obj = new Object();  //empty object it is similar to const obj = {}

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
