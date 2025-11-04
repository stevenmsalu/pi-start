import { loadPage } from "./router.js";
import { registerEventListeners } from "./events.js";

function startApp() {
  loadPage("home");
  registerEventListeners();

  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-route]");
    if (!link) return;

    e.preventDefault();
    const route = link.getAttribute("data-route");
    loadPage(route);
  });
}

document.addEventListener("DOMContentLoaded", startApp);
