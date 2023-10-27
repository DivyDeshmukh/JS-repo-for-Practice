/*
// forEach method does not return value, i.e. returns undefined

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = nums.forEach ( (item) => {
    return item;
} );

console.log(values);
*/

/*
// filter:- it returns a array of elements that passes a condition that is written inside its callback function

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = nums.filter ( (num) => num > 4 );            // returns all the numbers that are greater than 4
const newNums = nums.filter ( (num) => {
    return num > 4;                                             // we have to use 'return' keyword as it is defined in scope
} )

console.log(newNums);
*/

/*
// to achieve same thing with forEach method

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = [];

nums.forEach ( (val) => {
    if (val > 4) {
        newNums.push (val);
    }
} );

console.log(newNums);
*/

