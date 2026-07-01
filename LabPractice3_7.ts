// 1. Create an interface Product
interface Product {
  id: number;
  name: string;
  price: number;
}

// 2. Create a type alias Status
type Status = "Available" | "Out of Stock";

// 3. Create a function that accepts a Product and a Status
function printSummary(product: Product, status: Status): void {
  console.log("Product Summary");
  console.log("----------------");
  console.log(`ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price}`);
  console.log(`Status: ${status}`);
}

// Example usage
const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

printSummary(product1, "Available");