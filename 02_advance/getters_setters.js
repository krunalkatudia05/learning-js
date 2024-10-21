// getters and setters in js are basically used to set customized login or setting customized
// data , or adding an extra layer of protection or customization

// we have to compulsory return value in getter method 
// getter and setter method can be used in object and class.
// first setter method is called and then getter method is called.
// we have to compulsorly define both get and set mthod or cannot define one of them
// using getter and setter in Class.

// class User{
//     constructor(username,password)
//     {
//           this.username=username
//          this.password=password
//     }

//     get username()
//     {
//         //console.log('getter method called');
//         // here we have used another variable "_username" because when we use same variable(username) given in the constructor then
//         // constructor variable will call getter , setter method continously running in an infinite loop here the error will
//         // come which is -> Maximum call stack size exceeded .
//         return this._username;
//     }

//     set username(value)
//     {     
//          // here we have used another variable "_username" because when we use same variable(username) given in the constructor then
//         // constructor variable will call getter , setter method continously running in an infinite loop here the error will
//         // come which is -> Maximum call stack size exceeded .
//         this._username = value
//         //console.log(value + ' setter method');
//     }
// }

// const obj = new User('davidshah','123')
//console.log(obj.username);



// using getter and setter in function.

function User1(email , password){

    this._email = email
    this._password = password

    Object.defineProperty(this,'email',
        {
            get: function(){
                console.log('getter called');
                return this._email;
            },

            set: function(value)
            {                
                this.email = 'hi from setter ' + value;
            }
        })   
}

const obj1 = new User1('david@yopmail.com','passwe');
console.log(obj1.email);