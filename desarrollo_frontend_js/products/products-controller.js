// nexo de unión entre el modelo y la vista

import { getProducts } from "./products-model.js";
import { buildProduct, buildEmptyProductList } from "./products-view.js";

function drawProducts(products, productsContainer) {
  if(!products.length) {
    productsContainer.innerHTML = buildEmptyProductList();
  } else {
    products.forEach(product => {
      const newProduct = buildProduct(product);
      productsContainer.appendChild(newProduct);
    
    })
  }
}

function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-products-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent); //no se como editar esta parte
}

export async function productsController(productsContainer) {
  const spinner = document.querySelector('.spinner')
  productsContainer.innerHTML = "";

  spinner.classList.toggle('hidden');
  try {
    const products = await getProducts();
    fireEvent("Productos cargados correctamente", "success", productsContainer);
    drawProducts(products, productsContainer)
  } catch (error) {
    // alert(error.message)
    fireEvent(error.message, "error", productsContainer);
  } finally {
    spinner.classList.toggle('hidden');
  }
}