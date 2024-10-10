
//syntax of Funtions

function MyName()
{
    console.log('David Shah');
}


//here we have just called the reference of the function by not mentioning "()" 
//whenever we want the function to get execute than we need to mentioned the function
//name in proper format MyName(); now the function will get executed.
//Output : [Function: MyName]
//console.log(MyName);

//here the output will be undefined because we have not returned anything from the function.
//the console statement will be print.
//console.log(MyName()); 


function SumNumbers(number1,number2)
{
    console.log(number1+number2);
}


//SumNumbers(1,2);


/*
Example 1
function SumNumbers(number1,number2)
{
    console.log(number1 + number2);
}
here the output will be undefined because we have not returned the output from the function.
const result = SumNumbers(1,2);
console.log(result); 
*/


/*
//Example 2
function SumNumbers(number1,number2)
{
    let result=number1+number2
    return result;
    //console.log(number1 + number2);
}
//here the output will be 3 because we have returned the output from the function.
const result = SumNumbers(1,2);
console.log(result); 
*/



//Rest Operator in Functions.
//Rest Operator is represented by ...(3 dots) in function parameter.
//Rest Operator can be useful when we are not sure about the numbers of input parameter that we will be receiving.
//It returns array object.
/*
function RestEx(...nums)
{
    return nums;
}
console.log(RestEx(1,2,3,4));
*/

//OutPut : [ 1, 2, 3, 4 ]



/*
here we took "val1" paramter and "...num" which is an rest operator. 
*/
function CalculateAgain(val1,...num)
{
    return num;
}
//here we will get out "2,3,4,5,6" because "1" will be assigned to "val1" parameter
//and rest of the inputs will be assigned to rest operator
//console.log(CalculateAgain(1,2,3,4,5,6));
//OutPut : [ 2, 3, 4, 5, 6 ]



//Function with Object

// const user={
//     username:"David Shah",
//     price:100
// }
//We can name anything we want as an parameter name of the function that can be used as an reference of the object that we 
//will be passing at the time of calling the function.
// function DisplayUser(anyobject)
// {
//     return `Username is ${anyobject.username} and price is ${anyobject.price}`
// }

//console.log(DisplayUser(user));
//OutPut : Username is David Shah and price is 100


