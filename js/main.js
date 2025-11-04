import { homeUI} from './ui/home.js';
import { registerEventListeners } from './events.js';

function startApp() {
  homeUI();
  registerEventListeners();
}

document.addEventListener("DOMContentLoaded", () => {
  startApp();
});