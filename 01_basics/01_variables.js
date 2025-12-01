const accountID = 14435
let accountEmail = "aritra0801@email.com"
var accountPswd = "0801"
accountCity = "Jamshedpur" 
let accountState;  // if ONLY the variable is declared & NOT assigned then its O/P undefined.

// accountID = 12  // not allowed, can never update a const.

accountEmail = "@am@.gawkmail.com"
accountPswd = "6996"
accountCity = "Mysuru"

// adding or NOT adding a ; in JS is completely a personal choice 

console.log(accountID);

/*

NEVER use (var) in JavaScript                          ONLY let & const.
Because of problems in block scope and functional scope

*/

console.table([accountID, accountEmail, accountPswd, accountCity, accountState])

// do not have to use console.log() repeatedly, forms a table with index and values