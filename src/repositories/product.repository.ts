import { readFileSync, writeFileSync } from "fs";

const FILE_PATH = "./src/data/products.json";

export const getProductsFromFile = (): string => {
  return readFileSync(FILE_PATH, "utf-8");
};

export const saveProductsToFile = (data: string): void => {
  writeFileSync(FILE_PATH, data);
};
