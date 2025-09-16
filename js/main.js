import { renderUI } from './render.js';
import { registerEventListeners } from './events.js';

function startApp() {
  renderUI();
  registerEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  startApp();
});