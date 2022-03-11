// Sequence of Code

// console.log("step 1");
// console.log("step 2");
// console.log("step 3");

// Branching Code
// run code x if true, run code y if false

// if(True){
//     console.log("it's True");
// } else {
//     console.log("it's false");
// }

// // Looping
// // repeating something several times

// let counter = 0;

// while(counter < 10){
//     console.log(counter);
//     counter = counter + 1;
// }

////////////////////////////////////
// Truthy and Falsy
////////////////////////////////////
// the follwing are falsy (treated as false)
// 0, false, "", null, undefined, NaN
// const cheese = "munster" / 2;

// console.log(cheese);
// results in the NaN output

// console.log(!true)//falsy
// console.log(!false)//true
// console.log(!0)//true
// console.log(!1)//falsy

// let playerTurn = false;

// playerTurn = !playerTurn;
// console.log(!playerTurn);
// playerTurn = !playerTurn;
// console.log(!playerTurn);
// playerTurn = !playerTurn;
// console.log(!playerTurn);

//////////////////////////
// Boolean (True/False Logic)
//////////////////////////
// 
// console.log(1 === "1") // strick equality (good) 
// console.log(1 == "1") // loose equality (bad) 
// // less felixbility in code is better 
// // code orginization, good practice at correct syntax, good variable names, learning how to read errors
// console.log(1 > 1) // greater than 
// console.log(1 < 1) // less than
// console.log(1 <= 1) // lass than or equl
// console.log(1 >= 1) //  greater than or equl
// console.log(1 === 1 && 2 === 3) // and (both are true)
// console.log(1 === 1 || 2 === 3) // or (is one true)

/////////////////////////////
// if statement
/////////////////////////////
// branching code

// const customerName = "Steve"

// if (customerName === "Dave"){
//     console.log("Hello Dave")
// } else if (customerName === "Steve"){
//     console.log("Hello Steve")
// } else {
         // string concatenation ( add strings together)
//     console.log("Hello " + customerName)
         // string interpolation ( insertionvalues into a sting with syntax ${})
//     console.log(`Hello ${customerName}`)
// }
// Complexity will determine which method to use, 

//////////////////////////////
// Special Condiontals
//////////////////////////////
// Switch Statement (check a value against different possibility)

// const customerName = "gina"

// switch(customerName){
//     case "dave":
//         console.log("Hello Dave")
//         break // acts an interuptor when the code condtion was met
//     case "mark":
//         console.log("Hello Mark")
//         break
//     default:
//         console.log("Hello Someone else")
// }

/////////////////////////////
// ternary expression
////////////////////////////

// const customerName = "dav"
// // expression ? true : false
// customerName === "dave" ? console.log("Hello Dave") : console.log("Not Dave")
// // execute expression "?" if the exression results in ture do this "OR,:" the expressions results false 

// const response = customerName === "dave" ? "Hello Dave" : "Not Dave"

// console.log(response)

//////////////////////////
// Loops
//////////////////////////
// while loop
//while (expression){...code to run}

// let counter = 0

// while(counter < 10){
//     console.log(`The value of counter is ${counter}`)
//     counter += 1 // D.R.Y. coding (dont.repeat.yourself)
// }
// Break ex
// let input = "q"
// while(true){
//     if (input === "q"){break}
// }
//////////////////////////
// for loop
// for (create variable to track; expression; incrementing) {}

// for (let counter = 0; counter <10; counter += 1){
//     console.log(`The value of counter is ${counter}`)
// }

