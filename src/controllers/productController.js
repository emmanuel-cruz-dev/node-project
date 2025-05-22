import {
  createNewProduct,
  deleteProductById,
  fetchAllProducts,
  fetchProductById,
} from "../services/apiService.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.send({ status: "OK", data: products });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getOneProduct = async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).send({
      status: "FAILED",
      data: {
        error: "Product ID is required",
      },
    });
  }

  try {
    const product = await fetchProductById(productId);

    if (!product) {
      return res.status(404).send({
        status: "FAILED",
        data: {
          error: `Product with ID ${productId} not found`,
        },
      });
    }

    res.send({ status: "OK", data: product });
  } catch (error) {
    console.error("Error in getOneProduct:", error.message);
    res.status(500).send({
      status: "FAILED",
      data: {
        error: "Internal server error",
      },
    });
  }
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

export const deleteOneProduct = async (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter 'productId' is required" },
    });
  }

  try {
    deleteProductById(productId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
