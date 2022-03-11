

// // function declaration (message is a peramater)
// function prettyPrint(message){
//     console.log("--------------")
//     console.log(message)
//     console.log("--------------")
// }
// // executes code in code block

// //function invocation (using it) (text is an argument)
 // 
// prettyPrint("hello world")
// prettyPrint("kelp")
// prettyPrint("some more text")

 // functions can reduce your code by up to 75%, create a much easier to read work flow

/////////////////////////
// 3 ways to make a function
///////////////////////////

// functions declaration (hoisted) 
// function helloWorld(){
//     console.log("Hello World")
// }

// helloWorld()

// function expression

// const helloWorld2 = function(){
//     console.log("Hello World")
// }

// helloWorld2()

// arrow function

// const helloWorld3 = () => console.log("Hello World") // only write in this syntax for a singlaur function

// use the following for all multi functions (1 and... )
// const helloWorld4 = () => {
//     console.log("Hello World")
// }
// helloWorld3()
// helloWorld4()

///////////////////////
// Scope
///////////////////////

// //the function is your butler. 
// const myFunction = () => {
//     const someVariable = "grey poupon" // what you want from your butler
//     console.log(someVariable)
//     if(true){
//         return 1
//     } else {
//     return 2 // what you asked of your butler 
// }
// }
// // variables defined in code blocks are examples of local scopec
// const result = myFunction()
// console.log(result)

// const returnX = x => { return x +1}

// const a = returnX(5) // this function is stored as an expression
// const b = returnX(6)
// const c = returnX // this is a uninvoked function 

// console.log(a,b,c)

// function func1(x, u){
//     console.log(x)
//     u(x+1) // 
// }

// function func2(y){ 
//     console.log(y)
//     return (z) => console.log(z+2)
// }

// function func2(y){ 
//     console.log(y)
//     return 1
// }
// func1(1, func2) // 1 = x, fun2 = callback
// func1(1, (y) => console.log(y+5)) // func1(x, u("x+1"==="y") => console.log(y+5) )
// func1(2, console.log)
// func1(2,func2) //(x = 2, u = func2)
// func2(2, func2()) // (2, func2(nothing is being passed through the function))
// func1(2,func2(10))

// console.log(func2)
// console.log(func2(10))