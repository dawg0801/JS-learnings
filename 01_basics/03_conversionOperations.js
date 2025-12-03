// let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);       // "33" => 33
                               // "33abc" => NaN(not a number)
                                  // null => 0
                             // undefined => NaN                          
                            // true/false => 1/0  

let isLoggedIn = "Aritra"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 => true // 0 => false
// "" => false // "Aritra" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);       // will print 33
console.log(typeof stringNumber);// but NOT as a number
                                 // 33 will be a string


