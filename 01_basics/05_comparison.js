//console.log(2>1);
//console.log(2>=1);
//console.log(2<1);
//console.log(2==1);
//console.log(2!=1);

//console.log("2">1);
//console.log("02">1);

console.log(null>0);    //the reason is that equality check == works 
                        //differently from a comparison > < >=
//comparisons convert null to a 0 treating it as a number        
console.log(null==0);   
console.log(null>=0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0); //with UNDEFINED it is always false

console.log("2"===2); //with === it checks datatype 
                      // and does not convert it to integer type















