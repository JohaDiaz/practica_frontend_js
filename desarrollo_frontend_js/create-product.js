import { createProductController } from "./create-product/create-product-controller.js";
import { sessionControllerClose  } from "./product-list-session/product-list-session-controller.js";
import { isUserLoggedIn } from "./utils/auth.js"

if (!isUserLoggedIn()) {
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createProductForm = document.querySelector('form');

  createProductController(createProductForm)


  const closesession = document.querySelector("#cerrarsesion");
  sessionControllerClose(closesession)

})
