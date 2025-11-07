import { componentEventListeners } from "./events.js";
import { loadTheme, toggleTheme } from "./theme.js";
import { loadPage, handleRouteClick } from "./router.js";

function startApp() {
  loadTheme();
  loadPage("home");

  // UI-level event listeners
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
