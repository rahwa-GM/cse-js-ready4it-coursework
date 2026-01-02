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


// Part B: String Manipulation and Validation
console.log("---------------------------------------- Part B: String Manipulation and Validation ----------------------------------")
