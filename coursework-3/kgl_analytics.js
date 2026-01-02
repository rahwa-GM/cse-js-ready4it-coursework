// Coursework 3: KGL Analytics and Reporting System
console.log();
// Part A: Higher Order Functions - Data Transformation
console.log("---------------------------------------- Part A: Higher Order Functions - Data Transformation ----------------------------------")


// Create an array of at least 6 procurement record objects with this structure:
function createProcurementObject(id, name, produce, tonnage, cost, date){
    return {
            id: id,
            dealerName: name,
            produceType: produce,
            tonnageInKgs: tonnage,
            costInUgx: cost,
            procurementDate: date
        }
}

const procurementObj1 = createProcurementObject(1, "John", "Maize", 1120.5, 48000, new Date("2025-01-15"));

const procurementObj2 =  createProcurementObject(2, "Mary", "Wheat", 75, 31250, new Date("2025-01-18"));

const procurementObj3 = createProcurementObject(3, "Peter", "Rice", 1200, 95000, new Date("2025-02-02"));

const procurementObj4 = createProcurementObject(4, "Grace", "Soybeans", 64.75, 27800, new Date("2025-02-10"));

const procurementObj5 = createProcurementObject(5, "Daniel", "Barley", 90, 40500, new Date("2025-02-14"));

const procurementObj6 = createProcurementObject(6, "Lucy", "Beans", 1150.25, 67200, new Date("2025-03-01"));

const arrOfProcurementObjs = [procurementObj1, procurementObj2, procurementObj3, procurementObj4, procurementObj5, procurementObj6];

// console.log(arrOfProcurementObjs);


// Use the .map() method to create a new array where each record includes a new
// calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
// objects with the original properties PLUS the new costPerKg property.

const newArray = arrOfProcurementObjs.map(obj => {
    return {
        ...obj,                                      // the spread operator: copies all original properties
        costPerKg: obj.costInUgx / obj.tonnageInKgs  // adds the new calculated one
    }
})

// console.log(newArray);


console.log("---------------------------------------- Part A: #3 ----------------------------------")


// Use the .filter() method to create a new array containing only procurement records where:
// tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
const filteredArr = arrOfProcurementObjs.filter(obj => obj.tonnageInKgs >= 1000)
// Log the filtered array and its length
console.log('Filtered array:', filteredArr);
console.log(`\nLength: ${filteredArr.length}`);


// Use the .reduce() method to calculate:
// The total tonnage procured across all records
let totalTonnage = arrOfProcurementObjs.reduce((preVal, curVal) => preVal + curVal.tonnageInKgs , 0);

// The total cost (sum of all costInUgx values)
let totalCost = arrOfProcurementObjs.reduce((preVal, curVal) => preVal + curVal.costInUgx , 0);

console.log("---------------------------------------- Part A: #4 ----------------------------------")

// Log both totals with appropriate labels using template literals
console.log(`Total Tonnage: ${totalTonnage} kg`);
console.log(`Total Cost: ${totalCost} UGX`);



// for spacing 
console.log();
console.log();


// Part B: Sets for Unique Data Management
console.log("---------------------------------------- Part B: Sets for Unique Data Management ----------------------------------")

console.log("---------------------------------------- Part B: #5 ----------------------------------")


// Create a function getUniqueDealers that: Takes an array of procurement records as a parameter
// Uses a Set to extract all unique dealer names
// Returns an array of unique dealer names (convert Set back to array)
const getUniqueDealers = arr => [...new Set(arr.map(obj => obj.dealerName))];
    
const procurementObj7 = createProcurementObject(7, "John", "Rice", 1200, 4000, new Date("2025-01-15"));

const procurementObj8 =  createProcurementObject(8, "Mary", "Maize", 755, 3250, new Date("2025-01-18"));

const procurementObj9 = createProcurementObject(9, "Peter", "Wheat", 1000, 9000, new Date("2025-02-02"));

const newArrOfProcurementObjs = [...arrOfProcurementObjs, procurementObj7, procurementObj8, procurementObj9];

// Call the function with your procurement data and log the result
console.log(getUniqueDealers(newArrOfProcurementObjs));


console.log("---------------------------------------- Part B: #6 ----------------------------------")

// Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' 
const authorizedRoles = new Set();
authorizedRoles.add('Manager');
authorizedRoles.add('Director');

// Write a function isAuthorizedForProcurement that: Takes a userRole parameter 
// Uses the .has() method to check if the role exists in the Set
// Returns a Boolean
const isAuthorizedForProcurement = userRole => authorizedRoles.has(userRole);

// Test the function with different roles and log the results
console.log(isAuthorizedForProcurement('Manager'));     // true
console.log(isAuthorizedForProcurement('Director'));    // true
console.log(isAuthorizedForProcurement('Sales Agent')); // false



// for spacing 
console.log();
console.log();


// Part C: Maps for Price Management
console.log("---------------------------------------- Part C: Maps for Price Management ----------------------------------")

// Create a Map called kglPriceList
const kglPriceList = new Map([
    ['Beans', 5500],
    ['Grain Maize', 4800],
    ['Cow peas', 6000],
    ['G-nuts', 7200],
    ['Soybeans', 5800]
]);

console.log("---------------------------------------- Part C: #8 ----------------------------------")


// Write a function calculateSaleTotal that: Takes two parameters: produceName (string) and tonnageInKgs (number)
// Uses the Map's .get() method to retrieve the price per kg for that produce
// If the produce doesn't exist in the Map, return "Price not found"
// Otherwise, return the total sale amount (price × tonnage)
const calculateSaleTotal = (produceName, tonnageInKgs) =>  {
    const price = kglPriceList.get(produceName);
    return price !== undefined ? price * tonnageInKgs : "Price not found";
}


// Test with multiple produce types
console.log(calculateSaleTotal('Beans', 12));       //66000
console.log(calculateSaleTotal('Cow peas', 21));    //126000
console.log(calculateSaleTotal('Soybeans', 44));    // 255200
console.log(calculateSaleTotal('Maize', 10));       // "Price not found"
console.log(calculateSaleTotal('Wheat', 10));       // "Price not found"



console.log("---------------------------------------- Part C: #9 ----------------------------------")


// Write code that: Uses a loop to iterate over your kglPriceList Map
// For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
kglPriceList.forEach((price, produce) => console.log(`"Produce: ${produce}, Price per Kg: ${price} UgX`))

// Calculates and logs the highest price in the Map using the .reduce() method on the Map values
const highestPrice = [...kglPriceList.values()].reduce((acc, val) => val > acc ? val : acc , 0);
console.log(`\nThe highest price in the Map is ${highestPrice}`);