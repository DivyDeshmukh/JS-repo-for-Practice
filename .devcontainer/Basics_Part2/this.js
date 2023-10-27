/*
// 1. "this" in Objects

const obj = {
    name: "Divy",
    age: 21,

    sayHello: function () {
        console.log(`Hey there! ${this.name} and ${this.age}`);             // this refers to the current context, in this case it will be the object itself 
        console.log(this);
    }
}

console.log(obj.sayHello());
obj.name = "sfgswwwtwt";
console.log(obj.sayHello());
*/

// 2. "this" in global scope
//console.log(this);                                          // it will return an empty object that is '{}', and in web browser it will give 'window' object

/*
// 3. "this" in Connstructor Functions

function Employee (name, age) {
    this.name = name;                                              // in constructor functions "this" is used to refer to the current object
    this.age = age;
}

const obj1 = new Employee ("ABC", 33);
console.log(obj1.name);
console.log(obj1.age);
*/

/*
// 4. "this" in regular functions
function add () {
    let a = 4;
   console.log(this);                              // in regular functions "this" refers to the global object in node and 'window' in web browser
    console.log(this.a);                                // undefined bcoz this refers to the global object and global object do not have an 'a' property
}

add();
*/

/*
// 5. "this" in Arrow Functions
const fun = () => {
    let a = 4;
    console.log(this.a);
    console.log(this);                      // the result will be an empty object '{}' bcoz () => do not have their own this context and hence they inherit this value from surrounding
}

fun()
*/