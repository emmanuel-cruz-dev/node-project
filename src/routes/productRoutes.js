import express from "express";

const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("<h1>Hola mundo desde Router!</h1>");
  })

  .get("/:productId", (req, res) => {
    res.send(`Get product ${req.params.productId}`);
  })

  .post("/:productTitle", (req, res) => {
    res.send(`Create product ${req.params.productTitle}`);
  })

  .patch("/:productId", (req, res) => {
    res.send(`Update product ${req.params.productId}`);
  })

  .delete("/:productId", (req, res) => {
    res.send(`Delete product ${req.params.productId}`);
  });

export default router;
