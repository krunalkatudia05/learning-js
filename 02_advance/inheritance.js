class User {
    constructor(username){
        this.username=username;        
    }

    LogMe()
    {
        return `UserName is ${this.username}`
    }
}

class Student extends User{
    constructor(username,standard,rollno)
    {
        // super keyword behind the scene will get the value of the parent(User) class username
        // and will bind username of Parent(User) class to Child(Student) Class.
        super(username)
        this.standard=standard
        this.rollno = rollno
    }

    Info()
    {
        return `My UserName is ${this.username} . I am in ${this.standard} Standard and my RollNo is ${this.rollno}`
    }    
}

const obj1 = new Student('David','9','17');

console.log(obj1.Info());
console.log(obj1.LogMe());


