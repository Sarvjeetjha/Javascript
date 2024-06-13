const name="Savrjeet "
const repoCount=50
// console.log(name+repoCount + "value");  not  preffered
console.log(`Hello my name is${name} and my repo count is ${repoCount}  value`);


//to declare the string
const gameName= new String('Sarvjeet kumar')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(typeof(gameName));

console.log(gameName.charAt(2)); //return the character at that index
console.log(gameName.indexOf('e'));
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());

let newString=gameName.substring(0,5)
console.log(newString);


 newString=gameName.slice(0,5) //we can pass negative value 
 console.log(newString);
 
 newString=gameName.slice(-4,2) //we can pass negative value 
 console.log(newString);
 newString=gameName.slice(0,2)  
console.log(newString);