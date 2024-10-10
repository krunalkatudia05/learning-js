
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
// const StoreFilterVal2=ArrayVal.filter( (item) => item  >  2)
// console.log(StoreFilterVal2);

//syntax 4
// here in this example we are simply using implicit return method to return the data.
// by implicit return we do not require to write return statement and the data automatically get's return.
// const StoreFilterVal3=ArrayVal.filter( (item) => (item  >  2) )
// console.log(StoreFilterVal3);

//Multiple Filter in Arraj
//  const StoreFilterVal3=ArrayVal.filter( (item) => (item  >  2) )
//                                 .filter((item) => (item  >  4))
//  console.log(StoreFilterVal3);



// -----------Maps in Js------------------------------

// Map are used to transform the data.
// Map are used whenever we want to apply certain logic to each element of the map.
// Map returns new array with same length as the original array.



// --------------------Very Important Example to understand Map() vs Filter() -------------------------------
//const ArrayVal=[1,2,3,4,5,6]

/*
check "//1" where we have used condition to filter the data using map function. Note the log value of "//1"
map returns true or false whenever we try to filter the data.

The correct way to use map is to perform an operation to each element of the array. check "//3" for example.

check "//2" when we want to filter the data we are using filter method. and using condition we can filter the data.
filter return new array less or equal the size of original array
*/

//const _storemapval = ArrayVal.map( (val) => { return val > 3 });                        //1
//const _storemapval1 = ArrayVal.map( (val) => { return val * 3 });                       //3
// const _storefilterval = ArrayVal.filter( (val) => { return val > 3 });                 //2

//console.log(_storemapval);                                                              //1
//[ false, false, false, true, true, true ]
//console.log(_storemapval1);                                                             //3                                                            //1
//[ 3, 6, 9, 12, 15, 18 ]                                                               //3

//console.log(_storefilterval);                                                           //2
//[ 2, 4, 6, 8, 10, 12 ]

// function typeName(item)
// {
//     return item*2
// }
// const mapval1 = ArrayVal.map(typeName);
//console.log(mapval1);
 

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


  


