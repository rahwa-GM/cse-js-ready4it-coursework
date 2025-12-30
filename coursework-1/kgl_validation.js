
// 1. Variable declarations using appropriate keywords ( let or const )

// companyName should not change, so I use const
const companyName = "Karibu Groceries LTD"; // companyName with the value "Karibu Groceries LTD"

// minimumTonnage it may be updated if requirements change, so I use let
let minimumTonnage = 1000; // minimumTonnage with the value 1000

// Operational status can change over time, so I use let 
let isOperational = true; // isOperational with the value true

// managerName is unknown at declaration, so I declare with let to assign later
let managerName; // managerName (declare but do not assign a value)

// closedBranches is initialized with a null value, so I declare with let in case value is updated later
let closedBranches = null; // closedBranches with the value null



/* 
2. Use typeof operator to check the data type of each variable
and log it to the console
*/

console.log("typeof(companyName):", typeof(companyName));       // string
console.log("typeof(minimumTonnage):", typeof(minimumTonnage)); // number
console.log("typeof(isOperational):", typeof(isOperational));   // boolean
console.log("typeof(managerName):", typeof(managerName));       // undefined
console.log("typeof(closedBranches):", typeof(closedBranches)); // object (null is type 'object' in JS)


