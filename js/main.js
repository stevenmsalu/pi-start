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
    // ROUTING
    const link = e.target.closest("[data-route]");
    if (link) {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      loadPage(route);
      return;
    }

    // THEME TOGGLE
    if (e.target.closest("#modeToggle")) {
      document.documentElement.classList.toggle("theme-dark");

      const isDark = document.documentElement.classList.contains("theme-dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  });
}

document.addEventListener("DOMContentLoaded", startApp);