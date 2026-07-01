export {};
type Category = "Electronics" | "Clothing" | "Food";

interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 25000
    },
    {
        id: 2,
        name: "T-Shirt",
        category: "Clothing",
        price: 500
    },
    {
        id: 3,
        name: "Apple",
        category: "Food",
        price: 30
    },
    {
        id: 4,
        name: "Phone",
        category: "Electronics",
        price: 18000
    }
];

function filterProductsByCategory(
    products: Product[],
    category: Category
): Product[] {
    return products.filter(product => product.category === category);
}

const electronics = filterProductsByCategory(products, "Electronics");

console.log(electronics);