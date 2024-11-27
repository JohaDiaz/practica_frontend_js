import { isUserLoggedIn } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnauthorizedSession  } from "./sessionjoha-view.js";


export function sessionController2(sessionJoha) {

  if (isUserLoggedIn()) {
    sessionJoha.innerHTML = buildAuthorizedSession();

    const closeSessionButton = sessionJoha.querySelector("button")
    closeSessionButton.addEventListener("click", () => {
      localStorage.removeItem("jwt")

      sessionController2(sessionJoha)
    })
  } else {
 
    sessionJoha.innerHTML = buildUnauthorizedSession()
}
}
