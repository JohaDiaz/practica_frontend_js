import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getProduct, removeProduct } from "./product-detail-model.js"
import { buildDeleteButton, buildProductDetail } from "./product-detail-view.js"

export async function productDetailController(productDetailContainer, productId) {
  try {

      const product = await getProduct(productId);
      const user = await getCurrentUserInfo();

      
      productDetailContainer.innerHTML = buildProductDetail(product);

    
      const deleteButtonContainer = productDetailContainer.querySelector(".button-delete");
      
      console.log("userId systema", user.id)
      console.log("userId producto", product.user.id)
      
     
      if (user.id === product.user.id) {
          
          const removeButtonElement = buildDeleteButton();
          deleteButtonContainer.appendChild(removeButtonElement);

          
          removeButtonElement.addEventListener("click", async () => {
              const shouldRemove = confirm('¿Estás seguro de que quieres borrar el producto?');
              if (shouldRemove) {
                  try {
                      await removeProduct(product.id);
                      alert("Producto eliminado con éxito.");
                      window.location.href = "/";
                  } catch (error) {
                      console.error("Error al eliminar el producto:", error);
                      alert("Hubo un problema al eliminar el producto.");
                  }
              }
          });
      } else {
          console.log("El usuario actual no es el propietario del producto.");
          alert("No podrá borrar este producto porque no es el propietario.");
      }
  } catch (error) {
      console.error("Error al cargar el detalle del producto:", error);
      alert("Hubo un problema al cargar el detalle del producto.");
      window.location.href = "/";
  }
}