let score=33


console.log(typeof score);
console.log(typeof (score));


//String to number


score ="33"

console.log(typeof(score));

console.log("*************************************************************")

let valueInNumber=Number(score) //conversion
console.log(typeof(valueInNumber));
console.log("*************************************************************")


score ="33abc"
valueInNumber=Number(score)
console.log(valueInNumber);
console.log(typeof(valueInNumber));
console.log("*************************************************************")
score =null
valueInNumber=Number(score)
console.log(typeof(score));
console.log(valueInNumber);

console.log("*************************************************************")
score=undefined
valueInNumber=Number(score)
console.log(valueInNumber);
console.log(typeof(score));

console.log("*************************************************************")

score=true
valueInNumber=Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))


//Note:-
//"33"=>33
//"33abcd"=>Na
//true=>1
//false=>0

//to boolean

let isLoggedIn=1
let boleanIsLoggedIn=Boolean(isLoggedIn)
console.log("*******************************************************************");
console.log(boleanIsLoggedIn)
console.log(typeof(boleanIsLoggedIn))

console.log("******************************************************************");
isLoggedIn=""
boleanIsLoggedIn=Boolean(isLoggedIn)
console.log(boleanIsLoggedIn)
console.log(typeof(boleanIsLoggedIn))

console.log("******************************************************************");
isLoggedIn="Hello"
boleanIsLoggedIn=Boolean(isLoggedIn)
console.log(boleanIsLoggedIn)
console.log(typeof(boleanIsLoggedIn))

//1=>true
//0=>false
//""=>false
//"hello"=true
