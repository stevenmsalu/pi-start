import { loadPage } from "./router.js";
import { registerEventListeners } from "./events.js";

function startApp() {
  const saved = localStorage.getItem("theme");
  
  if (saved === "dark") {
    document.documentElement.classList.add("theme-dark");
  }

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
