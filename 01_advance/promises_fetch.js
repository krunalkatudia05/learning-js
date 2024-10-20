//--------------------------- Promises in Javascript --------------------------------------

// Promises have 3 state 1.) Pending 2.) fulfilled 3.) Rejected.

// whenever we call resolve and reject both together in promise then only resolve is executed and reject is ignored.
// whernever we call multiple catch in promise only 1st catch is executed even if we return the data. wherelse in case of
// resolve if we write multiple then along with return the next then will also get executed.
// Then() is directly related to resolve in promise.
// Catch() is directly related to Reject in promise
// we can use promise with asyn await. 
// async await directly cannot handle error in catch unlike promises.

// there are multiple ways to write Promise in Javascript.

//Method 1
// const PromiseOne = new Promise(function(resolve,reject){
//     //async code here
//     resolve()
//     reject()
// })
// PromiseOne.then(() => {
//     console.log('then executed');
// }).catch(()=>{
//     console.log('catch executed');
// })

//PromiseOne;
//Method 2
// new Promise(function(resolve,reject){
//     console.log('hi from promise');
//     resolve('this is resolve');
//     //reject('this is reject')
//     //reject('this is rejectasdkasd')
// }).then(function(message){
//     console.log(message);
//     return message
// }).then(function(message){
//     console.log("plus here " + message);
//     return message
// }).catch(function(message){
//     console.log(message);
//     return message
// }).catch(function(message){
//     console.log("plus here " + message);
// })

// new Promise(function(resolve,reject)
// {
//     const flag=true;
//     if(!flag)
//     {
//         resolve('hi from resolve......');
//     }
//     else
//     {
//         reject('hi from reject');
//     }
// }).then((mes)=>{
//     console.log(mes);
// }).catch((mes)=>{
//     console.log(mes)
// })



// ------------------------- Async Await with promise -------------------------------------

// const PromiseTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         const flag = false; // here when we set value to false promise will execute reject which means it's an error.
//         if(flag)
//             resolve('THis is from Resolve with async')
//         else
//             reject('THis is from reject with async')        
//     }, 2000);
// })
// here when we set the value of the "flag" to "false" promise will throw error and the below function will not be handle the error
// because async await function cannot directly handle the error.
//scenario 1 where we are not handling error by try catch block
// async function fn_Error() {
//     const response = await PromiseTwo;
//     console.log(response);
// }
// fn_Error();

//scenario 2 where we are handling error by try catch block
// async function fn_Error() {
//     try
//     {
//         const response = await PromiseTwo;
//         console.log(response);
//     }
//     catch(error)
//     {
//         console.log(error + ' printing from here')
//     }  
// }
// fn_Error();




// -------------- Async Await with Fetch ----------------------------------

// "fetch" in javascript returns an promise.

const apiurl='https://api.github.com/users/krunalkatudia05';

async function GetUserData()
{
    const response = await fetch(apiurl);    
     //console.log(response);

     // here we remove "await" from "response.json()" then we will not get any data because the promise is not yet complete.
     // here the promise is converting response to json hence without "await" keyword we will not get data.
     const data = response.json();      
     console.log(data);
}

//GetUserData();

// here without async await we achieved the functionality which we achieved in above example.
fetch(apiurl).then((response)=>{
    console.log(response)
    return response.json()
}).then((response) => {
console.log("login id : "+ response.login)
}).catch((response) => console.log(response))



// ----------------- Fetch in Javascript ------------------------------------


// fetch is an global fetch method that starts the process of fetching a resources from the network
// It returns the process which is fulfilled when the response is available.

// where the request returns 404 while using fetch it will be execute resolve method &
// not reject method because 404 is an response and it is not an error. Reject will execute
// in case when fetch will unable to make the request.

// Javascript Execution context creates an special queue which is called as high priority queue
// or fetch queue which will be executed first. hence fetch request are executed first.

// fetch internal mechanism divides into 2 parts. 1.) memory allocation and 2.) Making request.

// 1.) Memory allocation will allocated memory let say data the stored memory is not exactly
//called data. Also there are 2 array's onFulfilled and onRejection these methods are nothing but
// resolve in case of OnFulFilled and Reject in case of OnRejection. OnFulFilled and OnRejection
// are responsible for storing data into Memory which is allocated
// for fetch request (memory name "Data" in our case.) 

//2.)  making request to url are depending whether the request is made to url then resolve is
// executed otherwise reject is executed.

// we cannot access OnFulFilled & onRejection directly.