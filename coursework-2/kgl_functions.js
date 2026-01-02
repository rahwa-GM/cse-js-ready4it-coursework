// Coursework 2: KGL Inventory Processing System
console.log();
// Part A: Function Implementation
console.log("---------------------------------------- Part A: Function Implementation ----------------------------------")

// Write a function named calculateProcurementCost that: Takes two parameters: tonnageInKg and pricePerKg
function calculateProcurementCost(tonnageInKg, pricePerKg) {
    // If either parameter is not a number or is less than 0, return the string "Invalid input" or Returns the total cost (tonnage × price)
    return ( typeof(tonnageInKg) !== "number" || typeof(pricePerKg) !== "number" || Number.isNaN(tonnageInKg) || Number.isNaN(pricePerKg) || tonnageInKg < 0 || pricePerKg < 0) ? "Invalid input" : tonnageInKg * pricePerKg;
   
}
/*
console.log(calculateProcurementCost(20, 30));     // 600
console.log(calculateProcurementCost(-20, 30));    // "Invalid input"
console.log(calculateProcurementCost(20, "30"));  // "Invalid input"
console.log(calculateProcurementCost(NaN, 30));   // "Invalid input"
*/


// Write an arrow function named validateBuyerName that: Takes one parameter: buyerName
// Returns true if the name length is >= 2 and the name is not empty Returns false otherwise 
const validateBuyerName = buyerName => buyerName !== "" && buyerName.length >= 2;

/*
console.log(validateBuyerName('Rahwa'));    // true
console.log(validateBuyerName('R'));        // false
console.log(validateBuyerName(''));         // false
*/

// Create a function named checkUserAuthorization that: Takes one parameter: role
function checkUserAuthorization(role){
    // Uses a switch statement to check the role
    switch(role.toLowerCase()) {    
        // Returns "procurement_and_sales" for 'Manager'
        case "manager": 
            return "procurement_and_sales";

        // Returns "sales_only" for 'Sales Agent'
        case "sales agent":
            return "sales_only";

        // Returns "view_aggregations" for 'Director'
        case "director":
            return "view_aggregations";

        // Returns "unauthorized" for any other role (10 marks)
        default:
            return "unauthorized";           
    }

}

/*
console.log(checkUserAuthorization('manager'));     // "procurement_and_sales"
console.log(checkUserAuthorization('MANAGER'));     // "procurement_and_sales"
console.log(checkUserAuthorization('sales agent')); // "sales_only"
console.log(checkUserAuthorization('director'));    // "view_aggregations"
console.log(checkUserAuthorization('HR'));          // "unauthorized"
*/




// for spacing 
console.log();
console.log();

// git commit -m "Completed Part A: Function Implementation (kgl_functions.js)"

// Part B: Object Creation and Manipulation
console.log("---------------------------------------- Part B: Object Creation and Manipulation ----------------------------------")

// Create a function createSalesRecord that takes four parameters ( produceName, tonnage, buyerName, amountPaid ) and returns an object
function createSalesRecord(produceName, tonnage, buyerName, amountPaid){
    return {        
        id: Math.floor(Math.random() * 9000) + 1000,    // Generate a random number between 1000-9999
        produceName: produceName,                       // parameter value
        tonnageInKgs: tonnage,                          // parameter value
        buyerName: buyerName,                           // parameter value
        amountPaid: amountPaid,                         // parameter value
        saleDate: new Date().toISOString().slice(0,10), // current date using new Date()
        isCreditSale: false
    }
}


// Create a sales record object by calling your function with test data. 
const salesRecordObj = createSalesRecord("Maize", 1000, "Rahwa", 12000);
// console.log(salesRecordObj);

// Add a new property branch with value "Maganjo" using dot notation
salesRecordObj.branch = "Maganjo";

// Modify the isCreditSale property to true
salesRecordObj.isCreditSale = true;

// Add a dueDate property using bracket notation
salesRecordObj["dueDate"] = new Date("2026-1-30").toISOString().slice(0,10);

// Use Object.keys() to get all property names and log them
// console.log(Object.keys(salesRecordObj));


// Write a for...in loop that iterates over your sales record object 
// and logs each property name and value in the format: "Property: [name], Value: [value]" 

for (const key in salesRecordObj) {
    // console.log(`Property: ${key}, Value: ${salesRecordObj[key]}`);
}