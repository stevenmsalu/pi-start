import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
import { componentEventListeners } from "./events/index.js";
import { loadTheme, toggleTheme } from "./logic/theme.js";
import { loadPage, handleRouteClick } from "./router.js";
import { initStore } from './store.js';

window.Alpine = Alpine;
initStore();
Alpine.start();

function startApp() {
  loadTheme();
  loadPage("home");
  
  const mainContainer = document.querySelector("#app") || document.body;
  Alpine.initTree(mainContainer);
  componentEventListeners();

  document.addEventListener("click", (e) => {
    if (e.target.closest("#modeToggle")) { toggleTheme(); return; }
    handleRouteClick(e);
  });

  document.addEventListener("pageLoaded", () => {
    const mainContainer = document.querySelector("#app") || document.body;
    Alpine.initTree(mainContainer);
  });
}

document.addEventListener("DOMContentLoaded", startApp);