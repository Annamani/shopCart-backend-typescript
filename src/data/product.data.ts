import { readFile } from "fs/promises";
import path from "path";
import { Product } from "../models/product.model";

const fileURL = path.join(process.cwd(), "data", "productsData.json");

export const getProducts = async () => {
  try {
    const data = await readFile(fileURL, "utf-8");
    // 2. Check if file is empty
    if (!data) {
      throw new Error("No data has been loaded");
    }
    return JSON.parse(data);
  } catch (error) {
    throw new Error("error loading data");
  }
};

export const addProduct = (product: Product) => {
  //   products.push(product);
  // add to json file as well
  return product;
};
