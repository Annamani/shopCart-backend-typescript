import {
  getProductsFromFile,
  saveProductsToFile
} from "./repositories/product.repository";

console.log("1. Reading file...");

const data = getProductsFromFile();

console.log("Raw data from file:");
console.log(data);

console.log("2. Adding a fake product...");

const updatedData = JSON.stringify([
  {
    id: "1",
    name: "Laptop",
    price: 1000,
    stock: 5
  }
]);

saveProductsToFile(updatedData);

console.log("3. File updated!");

const newData = getProductsFromFile();

console.log("Final file content:");
console.log(newData);