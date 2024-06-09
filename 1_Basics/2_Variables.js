const accountId=12368465
let accountName="Abcpvt ltd"
var accountType="Private"
accountCity="Jaipur"
let accountDetails
console.log(accountId)

// accountId=2121221  not allowed 
console.log(accountId)  
console.table([accountId,accountName,accountType,accountCity]) //to display in tabular form 

accountName="kafkatech"
accountType="Pubic"
accountCity="Udaipur"

console.table([accountId,accountName,accountType,accountCity,accountDetails])



// Note :- IN current time we use let & const to declare a variable

//prefer not to use var ,because of issue in block scope and function scope