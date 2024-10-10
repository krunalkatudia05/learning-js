
//--------------------- Filter in JS ------------------------------

const ArrayVal=[1,2,3,4,5,6]

// We use Filter in Js to FIlter the data from array. It will return the data of
// the filter result unlike foreach which does not return any data.

// forEach loop does not return any data . That is why we use Filter in JS

// const StoreArray=ArrayVal.forEach( ( item ) => {
//     console.log("logging from forEach " + item)
//     return item; // even after returing the value forEach Loop will not return any data.
// })
//console.log(StoreArray);

//Filtering data from Array

// filtering the data from array can be done using different syntax

//syntax 1
//here we are giving an call back function and by using "{}" brackets we need to write "return" keyword as well to return the data.
const StoreFilterVal=ArrayVal.filter( (item) => { return item > 4 })
//console.log(StoreFilterVal);


//syntax 2
// here in this example we are passing the function directly into filter method. Note: we are only passing reference of function
// if we use "()" the method will execute the function which will give error.
// function typeSomething(item)
// {
//     return item;
// }
// const StoreFilterVal1=ArrayVal.filter(typeSomething)
// console.log(StoreFilterVal1);


//syntax 3 
// here in this example we are simply using implicit return method to return the data.
// by implicit return we do not require to write return statement and the data automatically get's return.
// const StoreFilterVal2=ArrayVal.filter( (item)=> item  >  2)
// console.log(StoreFilterVal2);



