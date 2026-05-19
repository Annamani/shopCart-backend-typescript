import { products } from "../repositories/product.repository";
import { Product } from "../models/product.model";

export const getAllProducts = (): Product[] => {
  return products;
};

export const createProduct = (product: Product): Product => {
  products.push(product);
  return product;
};
