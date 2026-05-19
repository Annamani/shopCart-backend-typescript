import { carts } from "../repositories/cart.repository";
import { Cart, CartItem } from "../models/cart.model";

export const addItemToCart = (
  cartId: string,
  productId: string,
  quantity: number,
): Cart | undefined => {
  const cart = carts.find((c) => c.id === cartId);

  if (!cart) return undefined;

  const existingItem = cart.items.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const newItem: CartItem = {
      productId,
      quantity,
    };

    cart.items.push(newItem);
  }

  return cart;
};
