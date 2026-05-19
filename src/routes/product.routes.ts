import express from "express";
import { getProducts, addProduct } from "../controllers/product.controller";

const router = express.Router();

router.get("/", getProducts);
router.post("/add-product", addProduct);

export default router;
