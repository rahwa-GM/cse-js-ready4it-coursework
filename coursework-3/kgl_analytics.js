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




// Use the .filter() method to create a new array containing only procurement records where:
// tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers)
const filteredArr = arrOfProcurementObjs.filter(obj => obj.tonnageInKgs >= 1000)
// Log the filtered array and its length
// console.log('Filtered array:', filteredArr);
// console.log(`\nLength: ${filteredArr.length}`);


// Use the .reduce() method to calculate:
// The total tonnage procured across all records
let totalTonnage = arrOfProcurementObjs.reduce((preVal, curVal) => preVal + curVal.tonnageInKgs , 0);

// The total cost (sum of all costInUgx values)
let totalCost = arrOfProcurementObjs.reduce((preVal, curVal) => preVal + curVal.costInUgx , 0);

// Log both totals with appropriate labels using template literals
console.log(`Total Tonnage: ${totalTonnage} kg`);
console.log(`Total Cost: ${totalCost} UGX`);
