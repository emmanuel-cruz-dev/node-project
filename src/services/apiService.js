const API_BASE_URL = "https://fakestoreapi.com/products";

export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`);
    if (!response.ok) {
      throw new Error(`Error fetching product: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchProductById:", error.message);
    throw error;
  }
};

export const createNewProduct = async (newProduct) => {
  // Validación
  if (!newProduct.title || !newProduct.price || !newProduct.category) {
    throw new Error("Missing required fields: title, price, or category");
  }

  const product = {
    ...newProduct,
    description: "Nuevo producto",
    image: "http://example.com",
  };

  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`Error creating product: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in createNewProduct", error.message);
    throw error;
  }
};

export const deleteProductById = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error deleting product: ${response.statusText}`);
    }

    const deletedProduct = await response.json();

    return {
      status: "SUCCESS",
      data: deletedProduct,
      message: `Product ID:${deletedProduct.id} deleted successfully`,
    };
  } catch (error) {
    console.error("Error in deleteProductById", error.message);
    throw error;
  }
};
