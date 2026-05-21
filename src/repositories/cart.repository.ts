import { readFileSync, writeFileSync } from "fs";

const FILE_PATH = "./src/data/carts.json";

export const getCartsFromFile = (): string => {
  return readFileSync(FILE_PATH, "utf-8");
};

export const saveCartsToFile = (data: string): void => {
  writeFileSync(FILE_PATH, data);
};
