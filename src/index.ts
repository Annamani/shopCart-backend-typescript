import express, { Request, Response } from "express";
import productRoutes from "./routes/product.routes";
const app = express();
app.use("/products", productRoutes);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Shopping Cart Backend Running 🚀",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
