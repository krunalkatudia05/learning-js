

// Class syntax is mentioned below
// Class User = { }

class User {
    constructor(username,email,password){
    this.username = username;
    this.emailID = email;
    this.password=password;
    }

    ConvertUserNameToLower(){
        return `Lower Case : ${this.username}`;
    }
}

const obj1 = new User('hitesh','hitest@yopmail.com','1234')
// console.log(obj1.ConvertUserNameToLower());

/// if there would be no classes then this can be achieved using "protoTypal Nature"

function User1(username,email,password){
    this.username = username;
    this.emailID = email;
    this.password = password;
}

User1.prototype.ConvertUserNameToLower = function(){
    return `Lower Case : ${this.username.toLowerCase()}`;
}
const obj12 = new User1('hitesh fROM FUNCTION','hitest@yopmail.com','1234')

console.log(obj12.ConvertUserNameToLower());
console.log(obj12.emailID);