import { componentEventListeners } from "./events/index.js";
import { loadTheme, toggleTheme } from "./logic/theme.js";
import { loadPage, handleRouteClick } from "./router.js";

function startApp() {
  loadTheme();
  loadPage("home");

  // Mount component event listeners
  componentEventListeners();

  // Global listeners
  document.addEventListener("click", (e) => {
    if (e.target.closest("#modeToggle")) {
      toggleTheme();
      return;
    }
    handleRouteClick(e);
  });
}

document.addEventListener("DOMContentLoaded", startApp);