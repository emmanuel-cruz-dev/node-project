import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  deleteOneProduct,
} from "../controllers/productController.js";

const router = express.Router();

router
  .get("/", getAllProducts)
  .get("/:productId", getOneProduct)
  .post("/", createOneProduct)
  .delete("/:productId", deleteOneProduct);

export default router;
