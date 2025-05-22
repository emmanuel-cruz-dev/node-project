import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router
  .get("/", getAllProducts)
  .get("/:productId", getOneProduct)
  .post("/", createOneProduct)
  .delete("/:productId", deleteProduct);

export default router;
