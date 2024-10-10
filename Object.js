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

// const mySym=Symbol("key1");

// const MyUser=
// {
//     name:"David",
//     [mySym]:"key1",
//     "place":"Mumbai",
//     "full name":"David Shah",
//     Age:28,
//     Email:"david.shah@yopmail.com",
//     mobile_no:"83838383" 
// }

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

// const obj1={}
// obj1.id=1;
// obj1.email="TEST@yopmail.com";
// obj1.isLoggedIn=false;


// const regular_user={
//     email:"test@yopmail.com",
//     fullname:{
//         userfullname:{
//             "firstname":"david",
//             "lastname":"shah"
//         }
//     }
// }

//console.log(regular_user)


//accessing object data of an multiple nested objects in js
// ? here checks whether the data inside the fullname is null or not. 
//In order to prevent error we check object that is null or not using ? mark
//console.log(regular_user.fullname?.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//merging 2 or more object method 1
//const obj4={obj1,obj2};
//console.log(obj4)
// Output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


//merging 2 or more object method 2
// {} represent the target object in which all the mentioned object will be merged.
//  const new_array=Object.assign({},obj1,obj2,obj3);
//  console.log(new_array)
// Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//merging 2 or more objects method 3
//const new_array={...obj1,...obj2,...obj3}
 //console.log(new_array)
 // Output : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


 //real case scenario of returning data from api 

 const users=[
    {
        id:1,
        üsername:"TEST@YOPMAIL.COM",
        IsLoggedIn:false
    },
    {
        id:2,
        üsername:"TEST1@YOPMAIL.COM",
        IsLoggedIn:true
    },
    {
        id:3,
        üsername:"TEST2@YOPMAIL.COM",
        IsLoggedIn:true
    }
 ]


 //reading data from the array object.
//  console.log(users[0].üsername);
//  console.log(users[1].üsername);


 //get the list of all the key's of the object
 //Note : check the console generated when we try to get the list of the key's of an array of object it retures ["0","1","2"] 
 //instead of the actual key's name of the object
//  console.log(Object.keys(users))
//  console.log(Object.keys(obj1))


 //get the list of all the values's of the object
 //Note : check the console generated when we try to get the list of the values's of an array of object it retures entire array as it is
 //instead of the actual values's of the object
  console.log(Object.values(users))
//  console.log(Object.values(obj1))


//Object returns each key pair as an seprate array inside an array.
 //console.log(Object.entries(obj1))


 //check whether the property exists or not inside an object. Returns true or false.
 //console.log(regular_user.hasOwnProperty("email"));
 //check whether the property exists or not inside an array of object. Returns true or false.
 //console.log(users[0].hasOwnProperty("üsername"));
 

 //destructing in javascript

 const objUser={
    username:"test@yopmail.com",
    fullname : "David Shah",
    Age : 28,
    Department : "Manager"
 }

//syntaxt of destructring is as follows.
//{} means we are trying to destructure it.
//username is the key name of the object and email is the custom name provided by us.
//destruturing is used because instead of writing Object.PropertyName everytime. 
//In one go we destructure the object and use accordingly
 const {username : email} = objUser

 console.log(email);

//End
