import { fetchAllProducts, fetchProductById } from "../services/apiService.js";

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
        // Lógica para POST (si lo requieren)
        break;

      case "PUT":
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
