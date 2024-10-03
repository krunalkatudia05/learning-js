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

let a=10;
const b=20;
var c=30;
if(true)
{
    let a = 30;
    const b=20;
    var c=30;

//here the output will be 30 because while printing the console "a" will be refered to the variable declared
// inside the blocked scope
    console.log("inner a : " +a); // Output : 30
}

console.log(a);
console.log(b);
console.log(c);


