import express from "express";
import router from "./routes/productRoutes.js";
import { handleRequest } from "./utils/utils.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/products", router);

app.get("/", (req, res) => {
  res.send(`
    <h1>Hola mundo!</h1>
    <p>Visita la API de productos en este <a href="http://localhost:3000/api/products/">link</a>.</p>
    `);
});

app.listen(PORT, () => {
  // console.log(`🚀 Server listening on port http://localhost:${PORT}`);
});

const args = process.argv.slice(2);

const method = args[0];
const endpoint = args[1];

console.log("Método:", method);
console.log("Endpoint:", endpoint);

handleRequest(method, endpoint);
