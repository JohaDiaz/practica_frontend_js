
import { isUserLoggedIn } from "../utils/auth.js";
import { buildUnauthorizedSession } from "../session-joha/sessionjoha-view.js";

export function sessionControllerClose(sessionJoha) {


    if (isUserLoggedIn()) {
      
      const closeSessionButton = sessionJoha.querySelector("button")
      closeSessionButton.addEventListener("click", () => {
        localStorage.removeItem("jwt")
  
        sessionControllerClose(sessionJoha)
      })
    }  else {
 
        sessionJoha.innerHTML = buildUnauthorizedSession()
    }
  }