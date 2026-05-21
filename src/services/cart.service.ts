import { Cart } from "../models/cart.model";
import {
  getCartsFromFile,
  saveCartsToFile,
} from "../repositories/cart.repository";
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
export const calculateCartTotal = (cartId: string): number | null => {
  const carts = getAllCarts();

  const cart = carts.find((c) => c.id === cartId);
  if (!cart) return null;

  let total = 0;

  for (const item of cart.items) {
    total += item.quantity * 100;
  }

  cart.total = total;

  saveCartsToFile(JSON.stringify(carts, null, 2));

  return total;
};
export const addItemToCart = (
  cartId: string,
  productId: string,
  quantity: number,
): Cart | null => {
  const carts = getAllCarts();

  const cart = carts.find((c) => c.id === cartId);
  if (!cart) return null;

  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  saveCartsToFile(JSON.stringify(carts, null, 2));

  return cart;
};
