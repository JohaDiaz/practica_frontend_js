import { sessionControllerClose  } from "./product-list-session/product-list-session-controller.js";


document.addEventListener("DOMContentLoaded", () => {

    const closesession = document.querySelector("#cerrarsesion");
    sessionControllerClose(closesession)

})