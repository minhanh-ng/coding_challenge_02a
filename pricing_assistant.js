// Coding Challenge 02a

// Code goes here
let productName = "Candle"
let costPerUnit = 12.50
let basePrice = 19.99
let discountRate = 0.15
let salesTaxRate = 0.07
let fixedMonthlyCost = 2000

 let discountedPrice = basePrice * (1-discountRate)
 let finalPriceWithTax = discountedPrice * (1+ salesTaxRate)
 let profitPerUnit = finalPriceWithTax - costPerUnit
 let breakEvenUnits = Math.ceil(fixedMonthlyCost/profitPerUnit)
 let isProfitablePerUnit = profitPerUnit > 0

console.log("Product name: " + productName)
console.log("Discounted price (before tax): $" + discountedPrice.toFixed(2))
console.log("Final price with tax: $" + finalPriceWithTax.toFixed(2))
console.log("Profit per unit: $" + profitPerUnit.toFixed(2))
console.log("Break-even units: $" + breakEvenUnits)
console.log("Per-unit profitability: " + isProfitablePerUnit)