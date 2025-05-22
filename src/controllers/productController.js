import { fetchAllProducts, fetchProductById } from "../services/apiService.js";

export const getAllProducts = async (req, res) => {
  const products = await fetchAllProducts();
  res.send({ status: "OK", data: products });
};

export const getOneProduct = async (req, res) => {
  const productById = await fetchProductById(req.params.productId);
  res.send({ status: "OK", data: productById });
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
