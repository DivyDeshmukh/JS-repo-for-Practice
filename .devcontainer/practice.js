const arr = [1, 2, 3, 4, 5];
const obj = {
    name: 'Divy',
    age: 21,
    course: 'computer science'
}

let result = arr.reduce ( (acc, initialVal) => {
    return acc+initialVal;
}, 0 );
console.log(result);
