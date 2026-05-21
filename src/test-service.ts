import { getAllProducts, createProduct } from "./services/product.service";

console.log("=== INITIAL PRODUCTS ===");
console.log(getAllProducts());

console.log("=== CREATING PRODUCT ===");

const newProduct = createProduct("Phone", 500, 10);

console.log("NEW PRODUCT:");
console.log(newProduct);

console.log("=== FINAL PRODUCTS ===");
console.log(getAllProducts());