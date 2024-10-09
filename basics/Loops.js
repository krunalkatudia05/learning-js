//Loops and it's Types


//for of
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







