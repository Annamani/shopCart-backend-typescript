import { Request, Response } from "express";
import { createProduct, getAllProducts } from "../services/product.service";

export const getProducts = (req: Request, res: Response) => {
  const products = getAllProducts();
  res.status(200).json(products);
};

export const addProduct = (req: Request, res: Response) => {
  const { id, name, price, description } = req.body;
  const newProduct = createProduct({
    id,
    name,
    price,
    description,
  });
  res.status(200).json(newProduct);
};
