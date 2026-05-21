import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/", productRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "Shopping Cart API running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
