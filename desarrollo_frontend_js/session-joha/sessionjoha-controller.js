import { isUserLoggedIn } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnauthorizedSession  } from "./sessionjoha-view.js";


export function sessionController2(sessionJoha) {

  if (isUserLoggedIn()) {
    buildAuthorizedSession();

    const closeSessionButton = sessionJoha.querySelector("#button-close")
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem("jwt")

      sessionController2(sessionJoha)
    })
  } else {
 
    buildUnauthorizedSession()
}
}
