export
//function calculatePrice(price: number, discountPercent : number): number { 
    //let netPrice = price - (price * discountPercent / 100);
    //return netPrice;
//}
//let price1: number = 500;
//let discountPercent1: number = 10;
//let priceAfterDiscount1: number = calculatePrice(price1, discountPercent1);
//console.log("Price: ", price1);
//console.log("Price after discount: ", priceAfterDiscount1);

function calculatePrice(price: number, discountPercent : number): number { 
    const after = price - (price * discountPercent / 100);
    if (after > 0) return after;
    else return 0;
}
let price1: number = 500;
let discountPercent1: number = 10;
let priceAfterDiscount1: number = calculatePrice(price1, discountPercent1);
console.log(`Price: ${price1}บาท`);
console.log(`Price after discount: ${priceAfterDiscount1}บาท`);

