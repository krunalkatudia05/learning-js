
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


