import { Router } from "express";
import {
  getCarts,
  createNewCart,
  addItem,
  getTotal,
} from "../controllers/cart.controller";

const router = Router();

router.get("/", getCarts);
router.post("/", createNewCart);
router.post("/add", addItem);
router.post("/total", getTotal);

export default router;
