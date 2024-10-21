// Static keyword in Javascript is used when we want to prevent the function being exposed
// while creating an instance of an class.
// The class inherits the User Class will also not be able to access CreateUniqueId()
// because of Static Keyword.

class User{
    constructor(username)
    {
        this.username=username;
    }

    LogMe()
    {
        console.log(`My UserName is ${this.username}`)
    }

//static word here is used to prevent CreateUniqueId being accessed to instance of this class.
    static CreateUniqueId()
    {
        return `${this.username}_`
    }
}

const obj1=new User('HiteshDavid');

obj1.LogMe();
console.log(obj1.CreateUniqueId());

