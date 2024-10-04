//Scops are very IMportant in Javascript.

/*
There are 2 types of Scope 1.) Blocked Scope  2.) Global Scope

1.) Blocked scope is when we declare the variable inside the block("{}"). we cannot access the variable declared 
inside the blocked scope outside the block.

2.) Global Scope is when we declare the vairables outside the block("{}"). We can access the variables declared outside
the global scope inside the blocked scope but vice versa is not possible.

var keyword is considered as global variable and can be accessible without any interruption of scope.

let allow us to create variables and we can re-assign the variable with new values 

const allow us to create variable which should be constant in entire scope. we cannot change the value of it. 
 */

// let a=10;
// const b=20;
// var c=30;
// if(true)
// {
//     let a = 30;
//     const b=20;
//     var c=30;

// //here the output will be 30 because while printing the console "a" will be refered to the variable declared
// // inside the blocked scope
//     console.log("inner a : " +a); // Output : 30
// }

// console.log(a);
// console.log(b);
// console.log(c);


// ****************** Important Concept ***************************************************

//Nested Scope using functions in Javascript

// function printOne()
// {
//         const username='David Shah';
        
//         function printTwo()
//         {
//             const region = 'India'
//             console.log('printTwo ' + username);
//             console.log(region);
//         }
//         console.log('printOne ' + username);
//         //console.log(region); // this line will give error because when we try to access the variable of child function into parent function it will give error because it will be out of scope.

//         printTwo();
// }
// printOne();  
// //Output when we run the code
// // printOne David Shah
// // printTwo David Shah
// // India


// //Important Notes
// //When we try to access the variables of Parent Function inside Child Functions the variables are accessible.
// //When we try to access the variable of Child Functions inside the Parent Function then the variable are not accessible.
// //this concept is somewhat called it as closure.




addOne(1);
function addOne(num)
{
    return num+1;    
}

addTwo(1);// here this line will give error
const addTwo=function(num)
{
    return num+2;    
}

// Important Notes : 
//here the addTwo(1); function will give error because when we try to execute our code addOne(1); will not give error because
//  unlike addTwo we have not stored addone function in an variable. Since we have store addTwo() into an variable we cannot
// use it before instialization.
// Learn the concept of Hoisting in Js properly to understand this concept.


