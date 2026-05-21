import {
  createCart,
  getAllCarts,
  addItemToCart,
  calculateCartTotal,
} from "./services/cart.service";

console.log("1. Creating cart...");
const cart = createCart();
console.log(cart);

console.log("2. All carts:");
console.log(getAllCarts());

console.log("3. Adding item...");
const updatedCart = addItemToCart(cart.id, "product-1", 2);
console.log(updatedCart);

console.log("4. Calculating total...");
const total = calculateCartTotal(cart.id);
console.log("Total:", total);
