// 1. Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Create an array of objects named myInventory
const myInventory: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, quantity: 15 },
  { id: 2, name: "Wireless Mouse", price: 25.5, quantity: 50 },
  { id: 3, name: "Mechanical Keyboard", price: 79.99, quantity: 30 },
];

// 3. Function to handle sales
function updateStock(productId: number, amountSold: number): void {
  const product = myInventory.find((p) => p.id === productId);

  if (!product) {
    console.log(`Product with ID ${productId} not found.`);
    return;
  }

  if (amountSold > product.quantity) {
    console.log("Not enough stock");
    return;
  }

  product.quantity -= amountSold;
  console.log(
    `Updated ${product.name}: sold ${amountSold}, remaining quantity: ${product.quantity}`
  );
}

// --- Example usage / test cases ---
updateStock(1, 5);   // Should succeed: Laptop quantity 15 -> 10
updateStock(2, 100); // Should fail: "Not enough stock"
updateStock(3, 10);  // Should succeed: Keyboard quantity 30 -> 20
updateStock(99, 1);  // Should log: product not found

console.log(myInventory);