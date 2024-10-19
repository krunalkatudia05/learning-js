// -------------------------------- call in Javascript ----------------------------------------

// call in javascript passes the current execution context(this keyword) to other function.



function SetUserName(username)
{
    this.username = username;
}

function SetData(email,username , password)
{
// when we call "call" keyword explicitly we pass the execution context of the SetData method
// to SetUserName and the execution context of SetUserName method will be deleted and SetUserName function will use execution
// context of the SetData Method.
// we are passing execution context (this keyword) because when we call SetUserName function from SetData function. while executing
// SetUserName function data of the username will be stored inside "this.username" but after the execution of the SetUserName function
// is completed the reference of the this.username property will be deleted hence the data will also get deleted. so to preserve
// context we are passing execution context of SetData method to SetUserName.
    SetUserName.call(this , username)
    this.email = email;
    this.password=password;    
}

const newval=new SetData('david@gmail.com','davidshah04','123')

console.log(newval);
