
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


// for spacing 
console.log();
console.log();


// Part B: String Manipulation and Validation
console.log("---------------------------------------- Part B: String Manipulation and Validation ----------------------------------")

// 4. Declare a variable dealerNameInput with the value " james BOND " 
let dealerNameInput = " james BOND "; 

// Removes the leading and trailing whitespace
let trimmedDealerNameInput = dealerNameInput.trim();

// Converts the cleaned name to proper title case (first letter of each word capitalized)
let spaceIndex = trimmedDealerNameInput.indexOf(" ");
let firstName = trimmedDealerNameInput.slice(0, spaceIndex);
let lastName = trimmedDealerNameInput.slice(spaceIndex + 1);

let firstNameTitleCase = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let lastNameTitleCase = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

// Stores the result in a new variable cleanDealerName
let cleanDealerName = firstNameTitleCase + " " + lastNameTitleCase;

// Logs the result using a template literal: "Cleaned Dealer Name: [name]" 
console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// 6. Write a validation check using comparison operators to verify that cleanDealerName :
// Has a length of not less than 2 characters
let nameGreaterThan2Chars = cleanDealerName.length >= 2; 

// Is not empty
let isEmpty = cleanDealerName === "";

// Log "Valid dealer name" or "Invalid dealer name" based on the result
let message = nameGreaterThan2Chars && !isEmpty ? "Valid dealer name" : "Invalid dealer name";
console.log(message);


// for spacing 
console.log();
console.log();


// Part C: Conditional Logic and Business Rules
console.log("---------------------------------------- Part C: Conditional Logic and Business Rules ----------------------------------")

//Create variables for a procurement record:

let userRole = 'Sales Agent';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';

// Implement the following KGL business rules using if...else if...else statements:
// Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales Agent', log an error message and do NOT proceed with the other checks.
if (userRole.toLowerCase() === "Sales Agent".toLowerCase()) {
    
    console.log("Error: Sales agents are not allowed to record produce entries.");
 
} else {
    
    if (procurementTonnage < 1000) { // Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if procurementTonnage >= 1000 . 
    
        console.log("Error: Procurement tonnage must be at least 1000kg.");

    } else if (+costInUgx < 10000) { // Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number type, then check if it's >= 10000. 

        console.log("Error: Cost must be at least 5 digits.");
    
    }

    // Use the logical AND ( && ) operator to create a single Boolean expression that checks if BOTH tonnage and cost conditions are met, 
    // and log "Procurement record valid" or "Procurement record invalid".
    console.log(procurementTonnage >= 1000 && +costInUgx >= 10000 ? "Procurement record valid" : "Procurement record invalid");

} 