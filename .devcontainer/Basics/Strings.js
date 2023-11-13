/*
// 1.String is Primitive Data Type that is stored inside stack, as primitive data types do not have methods because they are not objects therefore, 
// when we use properties or methods then they are primarily converted into wrapper objects temporaily

// 2. Declaring Strings
let str1 = "Divy ";
let str2 = new String ("Deshmukh");

//console.log(str1);
//console.log(str2);

// 3. working with mmethods

let str3 = "";
str3 = str3.concat(str1, str2);                         // concatenate both the strings, it is important to note that we have to declare an empty string first, otherwise it will concatenate it with the undefined
//console.log(str3);

//console.log(str3.at(3));                               // this will return the character at that particular index
//console.log(str3.charAt(5));                           // this will return the character at that particular index

console.log(str3.endsWith("kh"));                       // returns boolean if the string ends with that particular string or character
console.log(str3.includes("Divy"));                     // returns boolean if the string contains the given string as an input
*/
