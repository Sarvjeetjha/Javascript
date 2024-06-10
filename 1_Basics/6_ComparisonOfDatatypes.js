// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);
// console.log("02">1);
// console.log("02">100);


//avoid the below code due to inconsistency
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

/*Note :- Th ereason is that an equality check == and comparision operator (> ,< >=,<=) work diffrently 
comparision convert null to a number ,rreating as 0 
That's why nul>=0 is true and null >0 is false  */

//avoid the below code due to inconsistency
// console.log(undefined==0);
// console.log(undefined<=0);
// console.log(undefined>=0);
// console.log(undefined>0);
// console.log(undefined<0);

//=== strip check

console.log("2"==2);
console.log("2"===2);