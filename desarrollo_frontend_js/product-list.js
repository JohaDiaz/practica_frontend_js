import { sessionControllerClose  } from "./product-list-session/product-list-session-controller.js";
import { productsController } from "./products/products-controller.js";



document.addEventListener("DOMContentLoaded", () => {

    const closesession = document.querySelector("#cerrarsesion");
    sessionControllerClose(closesession);

    const productsListContainer = document.querySelector("#products-list");
    productsController(productsListContainer);


})