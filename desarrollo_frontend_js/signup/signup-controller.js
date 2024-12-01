import { REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";

export function signupController(form) {

  // 1- obtener los datos del formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const userEmailElement = form.querySelector("#user-mail");
    const passwordElement = form.querySelector("#password");
    const passwordConfirmElement = form.querySelector("#password-confirm");
    
    const userEmail = userEmailElement.value;
    const password = passwordElement.value;
    const passwordConfirm = passwordConfirmElement.value;
    
    const errors = [];

    // 2- validarlos
    const emailRegExp = new RegExp(REGEXP.mail);
    if (!emailRegExp.test(userEmail)) {
      errors.push('Formato de e-mail incorrecto')
      alert("Formato de e-mail incorrecto")

    }

    if (password !== passwordConfirm) {
      errors.push('Las contraseñas no son iguales')
      alert("Las contraseñas no son iguales")
    }

    for (const error of errors) {
      // mostrar notificaciones
    }

    if (errors.length === 0) {
      handleCreateUser(userEmail, password)
      alert("Sesión creada con éxito")
    }
  })

}

async function handleCreateUser(userEmail, password) {
  // 3- consumir sparrest para crear el usuario
  try {
    await createUser(userEmail, password)
    window.location.href = "/";
  } catch (error) {
    alert(error.message)
  }
}
