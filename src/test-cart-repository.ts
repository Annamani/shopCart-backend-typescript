import {
  getCartsFromFile,
  saveCartsToFile,
} from "./repositories/cart.repository";

console.log("1. Reading carts from file...");

console.log(getCartsFromFile());

console.log("2. Writing fake cart...");

const fakeData = [
  {
    id: "test-1",
    items: [],
    total: 0,
  },
];

saveCartsToFile(JSON.stringify(fakeData, null, 2));

console.log("File updated!");

console.log("3. Reading again...");

console.log(getCartsFromFile());
