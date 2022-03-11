//////////////////////////
// Data types
//////////////////////////

// primitive data types
// ex. numbers, boolenas, strings,
// BUNNSS (boolean, bigInt, undefined, numbers, null, strings, and symbols)

// collection data types
// ex. arrays and objects


////////////////////////
// Arrays
////////////////////////
// list of items
// always use the const notations
// delcare a new array with []
// maArray is a pointer to the [0] index begins
// best used to orgianize multiple items

// const myArray = [1,2,3,4,5,6];
// const myArray2 = new Array(1, 2, 3, 4, 5, 6);
// // const myArray2 = myArray // does not create a new array more over it creats a second pointer the same myArray
// console.log(myArray);
// console.log(myArray2);

// // access elements of the array through the index
// // indexs always start at 0
// const index = 3
// console.log(myArray[1]);
// console.log(myArray2[index]);

// learn to be comfrotable with arrays. Practice!!
///////////////////////
// Array Methods
///////////////////////
// methods : functions bulit into an object

const instructors = ["Lauren", "Alex", "Yanny", "Katie"];

// // console.log(instructors);

// // how to add and subtract from the array

// instructors.push("Denton"); // adds the the end of the array
// instructors.unshift("Mystery"); // adds to the beginning

// // console.log(instructors);

// instructors.pop() // remove last item 
// instructors.shift() // remove from first

// // console.log(instructors);

// // Splice can remove or add things from anywhere
// // .splice will operate at a slower speed than .pop or .push in terms of computing efficency

// instructors.splice(1,1); // removing alex
// instructors.splice(1,0,"Denton") // add denton
// //splice (index to start remove, number of items to remove, are things to add in that index location)

// // console.log(instructors);

// ///////////////////
// // Looping Over Array
// ///////////////////

// traditional for loop with an array

// for(let index = 0; index < instructors.length; index += 1){
//     const instructor = instructors[index];
//     console.log(instructor);
// }

// for of
// let element of array 
// for(let instructor of instructors){
//     console.log(instructor);
// }
// iterate - means to loop over array

//////////////////////////
// Copying  some or all of an array
//////////////////////////
// .slice copies some of an array to a new array
// spread oporator "..." we can use to copy whole array
// .slice(where to start, where to stop - not included)

// const nums = [1,2,3,4,5,6,7,8]

// const newArray = nums.slice(1, 7)
// // console.log(nums, newArray);

// // copy the whole array using spread operator "..."

// const copy1 = [...nums] // using bracket
// const copy2 = new Array(...nums) // using array constructor 
// // keyword _space_ Object

// // console.log(copy1, copy2);

// ////////////////////////
// // Arrays and Strings
// ////////////////////////

// // spell check uses this method
// // turn a string into an array
// const str = "Hello the Everybody"
// const strArray = str.split(" ") // split the string at every _space_
// // when splitting a string you must split "" with the same notation as a string ""
// // console.log(strArray);

// // remove the wrong value and turn back into a string

// strArray.splice(1,1);
// console.log(strArray);
// const newStr = strArray.join(" ") // join the array [] into a string ""
// console.log(newStr);

