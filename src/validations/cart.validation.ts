import { z } from "zod";
export const addItemSchema = z.object({
  cartId: z.uuid("Invalid cart ID"),
  productId: z.uuid("Invalid product ID"),
  quantity: z.number().int().positive("Quantity must be greater than 0"),
});

export const cartIdSchema = z.object({
  cartId: z.uuid("Invalid cart ID"),
});
