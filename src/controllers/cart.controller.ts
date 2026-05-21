import { Request, Response } from "express";
import {
  createCart,
  getAllCarts,
  addItemToCart,
  calculateCartTotal,
} from "../services/cart.service";

export const getCarts = (_req: Request, res: Response): void => {
  const carts = getAllCarts();
  res.json(carts);
};

export const createNewCart = (_req: Request, res: Response): void => {
  const cart = createCart();
  res.status(201).json(cart);
};
export const addItem = (req: Request, res: Response): void => {
  const { cartId, productId, quantity } = req.body;

  const updatedCart = addItemToCart(cartId, productId, quantity);

  if (!updatedCart) {
    res.status(404).json({ error: "Cart not found" });
    return;
  }

  res.json(updatedCart);
};
export const getTotal = (req: Request, res: Response): void => {
  const { cartId } = req.body;

  const total = calculateCartTotal(cartId);

  if (total === null) {
    res.status(404).json({ error: "Cart not found" });
    return;
  }

  res.json({ total });
};
