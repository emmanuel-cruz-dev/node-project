import express from "express";
import router from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <p>Hola mundo!</p>
    `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port http://localhost:${PORT}`);
});
