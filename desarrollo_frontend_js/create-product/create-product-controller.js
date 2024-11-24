import { createProduct } from "./create-product-model.js";

export function createProductController(createProductForm) {
  // 1- escuchar al evento submit para obtener los datos de creacion de producto
  createProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const textAreaElement = createProductForm.querySelector("#product-content");
    const productMessage = textAreaElement.value;

    handleProductCreation(productMessage)
  })

  async function handleProductCreation(productMessage) {
    // 2- crear producto
    try {
      await createProduct(productMessage)
      window.location.href = "/"
    } catch (error) {
      alert(error.message)
    }
  }

}
