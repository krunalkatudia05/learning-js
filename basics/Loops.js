//Loops and it's Types
/*
------------------------------- Important Notes -----------------------------
1.) Any of the loop "for of" , "for in" , "for each" does not return the when we use arrayname.foreach method.
*/ 



//-------------------------------------------for of loop in Javascript--------------------------------------------------------
/*
While using "for of" loop while iterating loop we get directly value of the "element" when we log the 'element'.
*/ 
//Iterating number of array using "for of"
const arr=[1,2,3,4]
// for (const element of arr) {
//     console.log(element);
// }

//Iterating string of array using "for of"
// const name="David Shah";
// for (const element of name) {
//     console.log(element);    
// }



//Map in JS looks like an object in js.
//It stores the data into key value format. 
//we cannot insert duplicate key inside map function 
//while inserting duplicate key in map function it will not give error but it will ignore the data if the key is duplicate.
//while inserting duplicate key in object it will give error while declaration.
//while declaring the map the data does not get shuffled in the order we have inserted. whereelse while storing data in object data 
//can be shuffle's the data

// const myObj=
// {
//     "id":123,
//     'name' : 'David Shah',
//     'designation' : 'Software Devloper'
//     'name' : 'David Shah'
// }

// console.log(myObj);

const map=new Map()

map.set('id',12345);
map.set('name','David Shah');
map.set('designation','Software Devloper');
map.set('name','David Shah');

//console.log(map);
//while destructuring map we need to destructre using "[element,elval]" where "element" represent "key" of the array and "elval"
//represents the "value" of the map.

// for (const [element,eleval] of map) {
//     console.log(element+' '+eleval);
// }

//Iterating Object using "for of"
// const myObj=
// {
//     "id":123,
//     'name' : 'David Shah',
//     'designation' : 'Software Devloper'   
// }

//below code will give error because object are not iterable using "for of" loop.
// for (const element of myObj) {
//  console.log(element);
// }


//------------------------------------------- for in loop in Javascript --------------------------------------------------------

/*
Basic difference between "for of" and "for in" loop is that
1.) "for in" can iterate through object  And "for of" loop cannot loop Object
2.) In "for in" when we iterate it provides the Index while Iterating but In "for of" when we iterate it provides the value directly.

*/ 
//Iterating Object using "for in"
// const myObj=
// {
//     "id":123,
//     'name' : 'David Shah',
//     'designation' : 'Software Devloper'   
// }

// for (const element in myObj) {
//  console.log(myObj[element]);
// }


//Iterating loop using "for in"
// const myArrIn=[1,2,3,4,5,6]
// for (const element in myArrIn) {
//     console.log(myArrIn[element]);
// }


//Iterating loop using Map
// const map=new Map()
// map.set('id',12345);
// map.set('name','David Shah');
// map.set('designation','Software Devloper');
// map.set('name','David Shah');

//below code is does not log anything because "map" is not iterable.
// for (const [element,eleval] in map) {
//     console.log(element+' '+eleval);
// }


//------------------------------------------- forEach loop in Javascript --------------------------------------------------------

// while using "programminglang.forEach" loop we have to provide an unnamed function (function without name).

//forEach function with callback function.
// const programminglang=["c#",".net core","Java","SQL"]
// const getValofprogramminglang = programminglang.forEach( (element) => {
//     console.log(element);    
//     //return element;
// });

//whenever we store the value of the forEach loop it does not return anyvalue hence it will return undefined. 
// Even if we write "return element"(line no 123) of the function then too it will return undefined.
//OutPut : return value of getValofprogramminglang : undefined
//console.log(`return value of getValofprogramminglang : ${getValofprogramminglang}`);


// const programminglang=["c#",".net core","Java","SQL"]
// const getValofprogramminglang = programminglang.forEach(function (element){
//     console.log(element);    
// });

//console.log(`return value of getValofprogramminglang : ${getValofprogramminglang}`);



//forEach function with external function

// function printme(element)
// {
//     console.log(element)
// }
// const programminglang=["c#",".net core","Java","SQL"]
// //Note : while passing function in forEach we have just provided reference(printme) of the function and we did not executed
// //the function by providing "()" brackets.
// const getValofprogramminglang = programminglang.forEach(printme);


//Paramters in ForEach Loop
// const programminglang=["c#",".net core","Java","SQL"]
// programminglang.forEach( (value,key,arraylst)=>{
//     //console.log(arraylst); //this line prints the array list
//     //console.log(key); //this line prints the key of the array list
//     //console.log(value); //this line prints the value of the array list
// });

//Iterating Array Of Object in Loop
//  const programminglang = [
//     {
//         "programming":"JavaScript",
//         "extenstion":"js"
//     },
//     {
//         "programming":"C#",
//         "extenstion":"cs"
//     }
//  ]
// programminglang.forEach( (value) => {    
//     console.log(value.programming); //this line prints the programming language name
//     console.log(value.extenstion); //this line prints the programming language name
// });