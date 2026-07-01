export {};
let result : string | number;
result = "Done";
console.log(result);
result = 20;
console.log(result);

enum Status{
    Active,
    Probation,
    Inactive
}
let studentStatus: Status = Status.Active;
console.log(studentStatus);

type ID = string | number;
type Student ={
    id :  ID,
    name : string
}

let student : Student = {id: "684245039",name : "Terl"};
console.log(student);

interface Product{
    readonly barcode : string;
    name : string;
    price : number ;
    discount? : number
}
const Product : Product [] = [
    {barcode : "4665445464",name : "laptop",price : 100000},
    {barcode : "4665445545",name : "mouse",price : 1000,discount : 5},
    {barcode : "4665445465",name : "telephone",price : 50000}
];
function showProduct(product: Product): void{
    console.log(`Barcode: ${product.barcode}`);
    console.log(`Name: ${product.name}`);
    console.log(`price: ${product.price}`);
    console.log(`discount: ${product.discount}`);
}
for (const p of Product ){
    showProduct(p);
}