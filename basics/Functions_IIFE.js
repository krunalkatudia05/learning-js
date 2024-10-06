//This and Arrow Functions

//This Refers to the current context

//In the browser there is an global object which is window object when we try to access using
//this keyword.

//Arrow Function Examples

//Example 1 . Using Arrow function with variables.
// const addval = (num1,num2) => {
//     return num1+num2
// }
// console.log(addval(1,2));

//Example 2 . Implicit Arrow function without return keyword.
//const addval = (num1,num2) => num1 + num2
// const addval = (num1,num2) => (num1 + num2) //using () brackets.
// console.log(addval(1,2));

//Example 3 . Implicit Arrow function returning object
//when returning object in implicit arrow function we cannot return object directly we have to use () brackets
//const userinfo = () => {username:'David Shah'}; //OutPut : userinfo
// const userinfo = () => ({username:'David Shah'}); // Output : { username: 'David Shah' }
// console.log(userinfo());


//Immediately Invoked Functions Expression(IIFE)

//IIFE functions are the functions that are executed only once and destroyed at same time after executing.

//basic syntax of IIFE Functions
//()()  first () bracket contains Function Implementation and Second () contains Execution and passing parameters.
// (function testone(){
//     console.log('hi from IIFE Function')
// })();

//There are 2 types of IIFE. 1.) Named & 2.) UnNamed IIFE

//Example of Named IIFE
// (function testone(){
//     console.log('hi from Named IIFE Function')
// })();

//Example of UnNamed IIFE
// (() => {
//     console.log('hi from UnNamed IIFE Function')
// })();



//Understanding IIFE Properly.
//we can also have same name of normal and IIFE function. Check the function names given below. that is "chai" to an normal function and IIFE function.
// function chai()
// {
//     console.log("This is normal function");
// }

// chai(); // here this chai object is accessible to entire code and can be used at different places.

// // what if we do not want to allow accessing that function? converting normal function into IIFE.
// (
//     function chai()
//     {
//         console.log("Hi from IIFE Named Function")
//     }
// )(); // () writing this is main part because without brackets the function will not execute. 

//By Converting Normal function into IIFE function we can save the function object being created. Hence IIFE prevents pollution of Global JS Scope.
