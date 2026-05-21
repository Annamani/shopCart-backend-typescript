import { Product } from "../models/product.model";
import {
  getProductsFromFile,
  saveProductsToFile,
} from "../repositories/product.repository";
import { v4 as uuid } from "uuid";

export const getAllProducts = (): Product[] => {
  const data = getProductsFromFile();

  return JSON.parse(data);
};

export const createProduct = (
  name: string,
  price: number,
  stock: number,
): Product => {
  const products = getAllProducts();

  const newProduct: Product = {
    id: uuid(),
    name,
    price,
    stock,
  };

  products.push(newProduct);

  saveProductsToFile(JSON.stringify(products, null, 2));

  return newProduct;
};
