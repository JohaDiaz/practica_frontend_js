import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
import { sessionController2  } from "./session-joha/sessionjoha-controller.js";
import { productsController } from "./products/products-controller.js";

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.querySelector("#products-container");
    const notificationsContainer = document.querySelector("#notifications-container");
    const sessionJoha = document.querySelector("#session-joha");

    sessionController2(sessionJoha)
    productsController(productsContainer)
    const { showNotification } = notificationController(notificationsContainer)
    
    productsContainer.addEventListener("loading-products-info", (event) => {
        showNotification(event.detail.message, event.detail.type); //editar
        })
})





