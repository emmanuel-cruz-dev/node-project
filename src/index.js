import express from "express";
import router from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", router);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port http://localhost:${PORT}`);
});

// fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((res) => console.log(res));
