import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
import { productsController } from "./products/products-controller.js";

document.addEventListener("DOMContentLoaded", () => {

const productsContainer = document.querySelector("#products-container");
const notificationsContainer = document.querySelector("#notifications-container");
const sessionContainer = document.querySelector("#session");

sessionController(sessionContainer)
productsController(productsContainer)
const { showNotification } = notificationController(notificationsContainer)

productsContainer.addEventListener("loading-products-info", (event) => {
    showNotification(event.detail.message, event.detail.type); //editar??
    })
})
