import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getProduct, removeProduct } from "./product-detail-model.js"
import { buildDeleteButton, buildProductDetail } from "./product-detail-view.js"

export async function productDetailController(productDetailContainer, productId) {

  try {
    const product = await getProduct(productId)
    const user = await getCurrentUserInfo();


    if (user.id === product.user.id) {
      const removeButtonElement = buildDeleteButton();
      productDetailContainer.appendChild(removeButtonElement);
      removeButtonElement.addEventListener("click", async () => {
        const shouldRemoveTweet = confirm('¿Seguro que quieres borrar el tweet?');
        if (shouldRemoveTweet) {
          // gstión del error
          await removeProduct(tweet.id);
          window.location.href = "/"
        }
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
