import { Request, Response } from "express";
import { createProduct, getAllProducts } from "../services/product.service";
import { createProductSchema } from "../validations/product.validation";

export const getProducts = (_req: Request, res: Response): void => {
  const products = getAllProducts();

  res.json(products);
};

export const addProduct = (req: Request, res: Response): void => {
  const result = createProductSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: "Validation failed",
      errors: result.error.issues,
    });
    return;
  }

  const { name, price, stock } = result.data;

  const product = createProduct(name, price, stock);

  res.status(201).json(product);
};
