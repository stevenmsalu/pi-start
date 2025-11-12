import { initButtonEvents } from "./buttons.js";
import { initCheckboxEvents } from "./checkboxes.js";
import { initInfoCardEvents } from "./infoCards.js";
import { initDependencyModal } from "./dependencyModal.js";
import { initLicenseModal } from "./licenseModal.js";
import { initIncludesModal } from "./includesModal.js";


export function componentEventListeners() {
  initButtonEvents();
  initCheckboxEvents();
  initInfoCardEvents();
  
  initDependencyModal();
  initLicenseModal();
  initIncludesModal();
}
