import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getProduct, removeProduct } from "./product-detail-model.js"
import { buildDeleteButton, buildProductDetail } from "./product-detail-view.js"

export async function productDetailController(productDetailContainer, productId) {

  try {
    const product = await getProduct(productId)
    const user = await getCurrentUserInfo();

    productDetailContainer.innerHTML = buildProductDetail(product);//REVISAR

    if (user.id === product.user.id) {
      const removeButtonElement = buildDeleteButton();
      const deleteButton = document.querySelector(".button-delete");
      deleteButton.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveTweet = confirm('¿Estás seguro de que quieres borrar el producto?');
        if (shouldRemoveTweet) {
          // gestión del error
          await removeProduct(product.id);
          window.location.href = "/"
        }
        click.preventDefault();
      })
    }
  } catch (error) {
    alert(error.message)
    window.location.href = "/"
  }
  
}


// 1- conocer quién es el dueño del tweet mostrado. --> expand

// 2- conocer el identificador del usuario logado.

// 3- comparar el id del autor del tweet mostrado con el id del usuario logado

// 4- si los id's son iguales, pintar el boton

// 5- cuando el botón se pulse, borrar el tweet, previa confirmación
