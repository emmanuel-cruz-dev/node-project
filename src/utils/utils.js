import {
  createNewProduct,
  fetchAllProducts,
  fetchProductById,
} from "../services/apiService.js";

export async function handleRequest(method, endpoint, data) {
  try {
    switch (method) {
      case "GET":
        if (endpoint === "products") {
          const products = await fetchAllProducts();
          console.log(products);
        } else if (endpoint.startsWith("products/")) {
          const productId = endpoint.split("/")[1];
          const product = await fetchProductById(productId);
          console.log(product);
        } else {
          console.log("Endpoint no válido");
        }
        break;

      case "POST":
        if (endpoint === "products" && data.length >= 3) {
          const [title, price, category] = data;
          const newProduct = { title, price: parseFloat(price), category };
          const createdProduct = await createNewProduct(newProduct);
          console.log("Producto creado correctamente:", createdProduct);
        } else {
          console.log("Falta alguno de los datos (title, price, category)");
        }
        break;

      case "DELETE":
        // Lógica para PUT/DELETE (si lo requieren)
        break;

      default:
        console.log("Método no soportado");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
