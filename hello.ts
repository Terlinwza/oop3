function hello(name: string): string{
    return `ยินดีต้อนรับ คุณ ${name}สู่NPRU`;
}

function vat(amount : number): number{
    return amount*7/100; //ยังไม่รวมVat
    //return amount*7/107; //รวมVat
}
let message1: string =hello('Terl ');
let message2: string =hello('Peter ');
let price1: number =500;
let vat1 :number = vat(price1);


console.log(message1);
console.log(message2);
console.log("Price: ",price1);
console.log("Vat: ",vat1);