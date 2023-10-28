/*
// forEach method does not return value, i.e. returns undefined

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const values = nums.forEach ( (item) => {
    return item;
} );

console.log(values);
*/

/*
// 1. filter:- it returns a array of elements that passes a condition that is written inside its callback function

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

/*
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);
*/

//2. map () 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
const newNums = nums.map ( (num) => {
    return num + 10;
} );

console.log(newNums);


// same thing with forEach

const newNums = []
nums.forEach ( (val) => {
    newNums.push (val+10);
} );

console.log(newNums);
*/

/*
// 3. Chaining different methods

const newNums = nums.map ( (num) => num*10 )
.map ( (num) => num+1 )
.filter ( (num) => (num>40) );

// the values of first map will return an array that will be transferred to the second map, i.e. the num inside 2nd map () will start from 10
// similarly, after completing the 2nd map, it will return an array on which the filter will be applied

console.log(newNums);
*/

/*
// 4. reduce ()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 0                         

// initiallly, accumulator holds the value that is passed in initialValue and then it will always contain the value of (accumulator + currValue)
const sumOfNat = arr.reduce ( (accumulator, currValue) => {
    console.log(`acc: ${accumulator} and current value: ${currValue}`);
    return accumulator + currValue
 }, initialValue );
console.log(sumOfNat);
*/

/*
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

*/

/*
// Shopping cart Example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
*/

// These methods can be applied to any Iterable Objects just like arrays