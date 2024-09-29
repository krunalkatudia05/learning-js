//Very Important Topic in Javascript;

//Channel Name : Chai Aur Code
//Video Name : Javascript in 1 shot in Hindi | Part 1
//TimeStamp : 03:45
//https://www.youtube.com/watch?v=sscX432bMZo


//Objects can be declared in 2 types
// 1.) Literals (normal way which we use)
// 2.) Constructor (creates an singleton object)


//this is the way to create object using constructor which creates an singleton object
//Start
// const newobj={
//     "name":"krunal",
//     "age":28
// }
// Object.create(newobj)
//End


//Creating object using Literals
//Start

const mySym=Symbol("key1");

const MyUser=
{
    name:"David",
    [mySym]:"key1",
    "place":"Mumbai",
    "full name":"David Shah",
    Age:28,
    Email:"david.shah@yopmail.com",
    mobile_no:"83838383" 
}

//console.log(MyUser.place);
//console.log(MyUser);

//we can access the object in 2 ways

//1st way
// console.log(MyUser.name);

// //2nd Way
// console.log(MyUser["name"]);

//Important Notes
// whenever we declare an key inside an object without "" then it can be access in both the way's 
//refer to above object and refer to the key name "name".
//it can be access in both the way 1.) MyUser.name & 2.) MyUser["name"]
//whenever we declare the key inside an object without "" javascript automatically converts it into string.


//whenever we use symbol in object we have to provide symbol name inside [] brackets
//otherwise the symbol will be treated as an string.
//while accessing also we can not access the symbol with the .(dot) sign we can only access the symbol using an [] brackets.

//accessing symbol
//Start
// console.log(MyUser.mySym);
// console.log(typeof MyUser.mySym)

//  console.log(MyUser[mySym]);
//  console.log(typeof MyUser[mySym])
//End


//We can freeze the object using below syntax
//Object.freeze(MyUser);
//after freezing the object we cannot modify the changes made in the values of the object.
//It will not give error but changes will not be reflected.


//adding functions into existing object
// MyUser.greetings = function (){
//     console.log("hi from function")
// };

//below code will return the function when we call the greeting key without () which is an function in our object.
// console.log(MyUser.greetings);
// console.log(typeof MyUser.greetings);

//below code will return the value when we call the greeting key with () which is an function in our object.
// console.log(MyUser.greetings());
// console.log(typeof MyUser.greetings());

//End
