import { createTweetController } from "./create-product/create-product-controller.js";
import { isUserLoggedIn } from "./utils/auth.js"

debugger;
if (!isUserLoggedIn()) {
  window.location.href = "/"
}

document.addEventListener("DOMContentLoaded", () => {
  const createTweetForm = document.querySelector('form');

  createTweetController(createTweetForm)
})
