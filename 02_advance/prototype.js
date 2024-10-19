// ----------- ProtoType in js -------------------------------------------------
/**
 A prototype is an object that provides a mechanism for inheritance and sharing properties and
 methods among objects. Each object in JavaScript has an internal property called [[Prototype]],
 which links to another object, known as its prototype. This relationship allows the object to
 access properties and methods defined on its prototype.

 we can provide prototype in object, function , arrays, string etc.
 */


 /// ------------- Example of ProtoType -------------------------



 //// ----------------------------- Inheritance in Js ------------------------------------

 //  function Dog(name) {
//     Animal.call(this, name); // Call the parent constructor
// }

// Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
// Dog.prototype.constructor = Dog; // Reset constructor reference

// Dog.prototype.speak = function() {
//     console.log(`${this.name} barks.`);
// };

// const myDog = new Dog('Rex');
// myDog.speak(); // Rex barks.

 //// ------------------------------ Inheritance Ends ---------------------------------

//  function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(`${this.name} makes a noise.`);
// };

// const dog = new Animal('Dog');
// dog.speak(); // Dog makes a noise.

/// ---------------- ProtoType Example Ends -----------------------------------------


// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()