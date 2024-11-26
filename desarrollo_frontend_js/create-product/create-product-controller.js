import { createProduct } from "./create-product-model.js";

export function createProductController(createProductForm) {
  // 1- escuchar al evento submit para obtener los datos de creacion de producto
  createProductForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const productName = createProductForm.querySelector("#product-name");
    const productDescription = createProductForm.querySelector("#product-description");
    const productPrice = createProductForm.querySelector("#product-price");
    const productImage = createProductForm.querySelector("#product-image");
    const productTransaction = createProductForm.querySelector("#product-transaction");
    const productMessage = {
      productName: productName.value,
      productDescription: productDescription.value,
      productPrice: productPrice.value,
      productImage: productImage.value,
      productTransaction: productTransaction.value
    }

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
