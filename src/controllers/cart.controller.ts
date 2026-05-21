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
  try {
    const { cartId, productId, quantity } = req.body;
    const updatedCart = addItemToCart(cartId, productId, quantity);
    if (!updatedCart) res.status(404).json({ error: "Cart not found" });
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getTotal = (req: Request, res: Response): void => {
  try {
    const { cartId } = req.body;
    const total = calculateCartTotal(cartId);
    if (!total) {
      res.status(404).json({ error: "Cart not found" });
      return;
    }
    res.status(200).json({ total });
  } catch (error) {
    res.status(404).json(error);
  }
};
