import {
  createNewProduct,
  fetchAllProducts,
  fetchProductById,
} from "../services/apiService.js";

export const getAllProducts = async (req, res) => {
  const products = await fetchAllProducts();
  res.send({ status: "OK", data: products });
};

export const getOneProduct = async (req, res) => {
  const productById = await fetchProductById(req.params.productId);
  res.send({ status: "OK", data: productById });
};

export const createOneProduct = async (req, res) => {
  try {
    const { title, price, category } = req.body;

    if (!title || !price || !category) {
      return res
        .status(400)
        .send({ status: "FAILED", message: "Missing fields" });
    }

    const newProduct = {
      title,
      price,
      category,
    };

    const createdProduct = await createNewProduct(newProduct);
    res
      .status(201)
      .send({ status: "OK", data: createdProduct, message: "Product created" });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (req, res) => {
  res.send(`Delete product ${req.params.productId}`);
};
