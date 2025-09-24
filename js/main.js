import { homeUI} from './render/home.js';
import { registerEventListeners } from './events.js';

function startApp() {
  homeUI();
  registerEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  startApp();
});