import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),

  price: z.number().positive("Price must be greater than 0"),

  stock: z.number().int().nonnegative("Stock cannot be negative"),
});
