// whenever we want to know some details about any property of an object that is writable or not,
// iterable or not, configurable or not we can use this feature.


// Important Note : when we console.log(Math.pi) the value of it is 3.14 . If we try to change
// the value of it. It is not possible we can check the confguration of the 
// property by getOwnPropertyDescriptor

const user = 
{
    name:"david",
    age :'12',
    fullname : 'David Shah'
}


console.log(Object.getOwnPropertyDescriptor(user,'name'));
// OutPut
// {
//     value: 'david',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// here we are changing the configuration of the "name" property of the "User" Object.
Object.defineProperty(user,'name',{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(user,'name'));
// OutPut
// {
//     value: 'david',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }


// here after setting "enumerable" to "false" using getOwnPropertyDescriptor when we try to iterate through "user" object
// then we only get the value of age & fullname because of disabling "enumerable" "false" using getOwnPropertyDescriptor
// of the "user" object 
for (const [key,name] of Object.entries(user)) {
    console.log(`key ${key} & value is ${name}`)
}
