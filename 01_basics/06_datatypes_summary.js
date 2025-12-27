// Primitive

// 7 types - String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;// this variables value is null

const id = Symbol('123')
const anotherId = Symbol('123') // Symbol function is to return 
                                // different values no matter what

console.log(id===anotherId); // gives false
                        // even when the values inside symbol are same

const bigNumber = 34567845218909398756499928n
// Numeric literals with absolute values equal to 2^53 
// or greater are too large to be represented accurately as integers.


// Non primitive (Refrence)

// Arrays, Objects, Functions

const heroes = ["shaktiman","nagaraj","doga"];

const myObj = {
    studentName: "Aritra",// values inside curly brackets are objects
    age: 19,
}

const myFunction = function(){ // Declaration of a function
    console.log("hello guys");
}

console.log(typeof bigNumber);// typeof is a pre-defined function
// all non-primitive datatype have object as datatype
// function also has datatype as object function 

// *******************************************************************

// two types of memory allocation
// Stack (Primitive) , Heap (Non-primitive)

let myYoutubename = "aritramondaldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"// and the copy got updated

console.log(myYoutubename);// all primitive values are taken in stack
console.log(anothername);// in stack only a copy is given

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "aritra@google.com"

console.log(userOne.email);
console.log(userTwo.email);