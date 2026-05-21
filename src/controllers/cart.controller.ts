import { Request, Response } from "express";
import {
  createCart,
  getAllCarts,
  addItemToCart,
  calculateCartTotal,
  deleteCart,
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
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const getTotal = (req: Request, res: Response): void => {
  try {
    const { cartId } = req.body;
    const total = calculateCartTotal(cartId);
    res.status(200).json({ total });
  } catch (error) {
    res.status(404).json(error);
  }
};
export const removeCart = (req: Request, res: Response): void => {
  try {
    const { cartId } = req.params;
    if (Array.isArray(cartId)) {
      throw new Error("Invalid cart ID");
    }
    deleteCart(cartId);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(404).json(error);
  }
};
