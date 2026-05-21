import { Router } from "express";
import {
  getCarts,
  createNewCart,
  addItem,
  getTotal,
  removeCart,
} from "../controllers/cart.controller";

const router = Router();

router.get("/", getCarts);
router.post("/", createNewCart);
router.post("/add", addItem);
router.post("/total", getTotal);
router.delete("/:cartId", removeCart);
export default router;
