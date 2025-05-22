import { getProductsService } from "../services/productServices.js";

export const getAllProducts = (req, res) => {
  const allProducts = getProductsService();
  res.send("Get all products");
};

export const getOneProduct = (req, res) => {
  res.send(`Get product ${req.params.productId}`);
};

export const createOneProduct = (req, res) => {
  res.send(`Create product ${req.params.productTitle}`);
};

export const updateOneProduct = (req, res) => {
  res.send(`Update product ${req.params.productId}`);
};

export const deleteProduct = (req, res) => {
  res.send(`Delete product ${req.params.productId}`);
};
