import { initButtonEvents } from "./buttons.js";
import { initCheckboxEvents } from "./checkboxes.js";
import { initInfoCardEvents } from "./infoCards.js";
import { initModalEvents } from "./modals.js";

export function componentEventListeners() {
  initButtonEvents();
  initCheckboxEvents();
  initInfoCardEvents();
  initModalEvents();
}
