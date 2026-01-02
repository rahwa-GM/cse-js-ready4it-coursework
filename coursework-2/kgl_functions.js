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



// for spacing 
console.log();
console.log();


// Part C: Loop Implementation and Data Processing
console.log("---------------------------------------- Part C: Loop Implementation and Data Processing ----------------------------------")

// Create an array of daily procurement tonnages for a week:
const weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage = 0;
// using a traditional for loop calculates the total tonnage for the week
for (let i = 0; i < weeklyTonnage.length; i++) {
    totalTonnage += weeklyTonnage[i];
}
// Calculates the average daily tonnage
let averageTonnage = totalTonnage / weeklyTonnage.length;

// Logs both results (15 marks)
// console.log(`The total tonnage for the week = ${totalTonnage}, and The average daily tonnage = ${averageTonnage.toFixed(2)}`);


// Create an array of sales records (use your createSalesRecord function to create at least 5 records with varying data).
const sales1 = createSalesRecord("Maize", 1000, "Rahwa", 12000);
sales1.isCreditSale = true; 

const sales2 = createSalesRecord("Wheat", 800, "Daniel", 8000);

const sales3 = createSalesRecord("Rice", 1500, "Martha", 18000);
sales3.isCreditSale = true; 

const sales4 = createSalesRecord("Sorghum", 1200, "Samuel", 14000);

const sales5 = createSalesRecord("Beans", 900, "Lydia", 9500);
sales5.isCreditSale = true; 

// Put them all in an array
const salesRecords = [sales1, sales2, sales3, sales4, sales5];


// Write code using a for...of loop that: Counts how many credit sales exist 
// Uses the continue statement to skip non-credit sales
let creditSales = 0;
for (const obj of salesRecords) {
    if(!obj.isCreditSale) continue;
    creditSales++;
}

// Logs "Total credit sales: [count]"
// console.log("Total credit sales:", creditSales);


// Simulate a stock check: Create an inventory array:
const inventory = [
    {name: 'Beans', tonnage: 500},
    {name: 'Maize', tonnage: 0},
    {name: 'G-nuts', tonnage: 300}
];

// Use a for loop with a break statement to: Search for the first item with tonnage === 0
// When found, log "Manager Alert: [produce name] is out of stock" and exit the loop immediately
for (const obj of inventory) {
    if (obj.tonnage === 0) {
        console.log(`Manager Alert: ${obj.name} is out of stock`);
        break;
    }
}