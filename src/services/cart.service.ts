import { Cart } from "../models/cart.model";
import {
  getCartsFromFile,
  saveCartsToFile,
} from "../repositories/cart.repository";
import { getAllProducts } from "./product.service";
import { v4 as uuid } from "uuid";

export const getAllCarts = (): Cart[] => {
  const data = getCartsFromFile();
  return JSON.parse(data);
};

export const createCart = (): Cart => {
  const carts = getAllCarts();
  const newCart: Cart = {
    id: uuid(),
    items: [],
    total: 0,
  };
  carts.push(newCart);
  saveCartsToFile(JSON.stringify(carts, null, 2));
  return newCart;
};
export const calculateCartTotal = (cartId: string): number => {
  const carts = getAllCarts();
  const products = getAllProducts();
  const cart = carts.find((c) => c.id === cartId);
  if (!cart) throw new Error("Cart not found");
  let total = 0;
  for (const item of cart.items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) throw new Error("Product not found");
    total += product.price * item.quantity;
  }
  cart.total = total;
  saveCartsToFile(JSON.stringify(carts, null, 2));
  return total;
};
export const addItemToCart = (
  cartId: string,
  productId: string,
  quantity: number,
): Cart => {
  const carts = getAllCarts();
  const products = getAllProducts();
  // checking cart whether cart exists are not
  const cart = carts.find((c) => c.id === cartId);
  if (!cart) throw new Error("Cart not found");
  // check product
  const product = products.find((p) => p.id === productId);
  if (!product) throw new Error("Invalid product ID");
  const existingItem = cart.items.find((item) => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  saveCartsToFile(JSON.stringify(carts, null, 2));
  const totalCartValue = calculateCartTotal(cartId);
  cart.total = totalCartValue;
  return cart;
};
