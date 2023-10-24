/*
// 1.Creating Arrays

const arr = [1, 2, 3, 4, "Divy", true]

console.log(arr[0]);
*/

/*
// 2. Methods in Arrays
const arr = [1, 2, 3, 4]

/*
arr.push(5)                                 adds to the last permanently to original array
console.log(arr);
arr.pop()                                   removes from the last permanently to original array
console.log(arr);
arr.unshift(5)                               adds to the first permanently to original array
console.log(arr);
arr.shift()                                   removes from the first permanently to original array
console.log(arr);


//console.log(arr.push(5));                     // this will return the length of the array
//console.log(arr.pop());                       // this will return the length of the array     
//console.log(arr.unshift(5));              // this will return the length of the array
//console.log(arr.shift());                     // this will return the length of the array

console.log(arr.includes(8))             //used to check whether the array contains the particular element or not
console.log(arr.indexOf(2));             //returns the index of an element
console.log(arr.join());                 //it binds all the elements of array into one string, but temporaily that is original array will remain same
console.log(typeof arr.join());          //it will string

console.log(arr.slice(1, 3));             //it will return elements starting from index 1, 2, and not 3 as it will be excluded
console.log(arr.splice(1, 3));            //this will start from 1 and will include 3 but removes all the elements from original array on the indexes 1 to 3
console.log(arr);                         //splice will make changes in the original array as well
*/

// 3. Merging Arrays

//const marvel_heros = ["Ironman", "Superman"]
//const dc_heros = ["Batman", "Shaktiman"]

//marvel_heros.push(dc_heros);                // this will add dc_heros to the marvel_heros array but as an array only

//console.log(marvel_heros);
//console.log(marvel_heros[2][1]);            //that is accessing 2nd element of the //3rd element which is array

//const newArr = marvel_heros.concat(dc_heros);                // this will concat both arrays and will "return" a new array
//console.log(newArr);

//merging with spread operator
//const newArr = [...marvel_heros, ...dc_heros];                this will work same as concat
//console.log(newArr);

//const another_array = [1, 2, 3, [4, 5, 6], [7, 8, 9]]
//console.log(another_array.flat());                              // this will give a single array
//console.log(another_array.flat(Infinity));                         //this can also take the depth argument which specifies the depth to which we want it to make array flat

/*
// 4. working with Array.method(arr)            //Array is the global object fror arrays
console.log(Array.isArray("Divy"));                  // this will tell us whether the given argument is an array or not, in this case it is not because string is a primitve value and not an array in js
console.log(Array.from("Divy"));                       // this will convert it into an array, we can pass variables also

//interesting case

console.log(Array.from({name: "Divy"}));                // this will return an [] empty array, bcoz whenever it fails to create an array then returns []
console.log(Array.of(100, 200));          //this will merge both and will make an array

*/