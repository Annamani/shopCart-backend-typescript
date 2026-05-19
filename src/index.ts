import express from "express";
import productRoutes from "./routes/product.routes";
const app = express();
app.use(express.json());

app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Shopping Cart Backend Running 🚀",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
