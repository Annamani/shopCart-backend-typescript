import { Request, Response } from "express";
import { createProduct, getAllProducts } from "../services/product.service";

export const getProducts = (_req: Request, res: Response): void => {
  const products = getAllProducts();

  res.json(products);
};

export const addProduct = (req: Request, res: Response): void => {
  const { name, price, stock } = req.body;

  const product = createProduct(name, price, stock);

  res.status(201).json(product);
};
