import {
  createNewProduct,
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

export const deleteProduct = async (req, res) => {
  const products = await fetchAllProducts();
  const { productId } = req.params;
  const productIndex = products.findIndex(
    (product) => product.id === productId
  );

  products.splice(productIndex, 1);
  res.send(`Delete product ${productId}`);
};
