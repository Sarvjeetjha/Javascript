//data types is divided into two types on the basis of how data is stored in memory
//Premitive


//7 types:(these are call by value)
//String
//Number
//Boolean
//null
//undefined
//BigInt
//Symbol:- used to make unique any value

//Note :- javascript is dynamically typed Languge
//Note:- typescript is statically typed



const score =100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp= null
let userEmail;//undefined

const id=Symbol('123')

const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=54684615689468465489516546111654646415n//n in last is used for bigINt
console.log(bigNumber);




//Refererence Types(Non premitive)
//Array
//Objects
//Function

//array
const heroes=['Shaktiman','naagraj','doga',5]
console.log(heroes);


//object
let myObj={name:'sarvjeet',age:22}
console.log(myObj);

const myFunc=function(){
    console.log("hello World");

}
myFunc()

//Note :- to check data Types
//typeof()  fundction is used

console.log(typeof(null));
console.log(typeof(myObj));
console.log(typeof(heroes));
console.log(typeof(564654645165.651));
console.log(typeof(false));


