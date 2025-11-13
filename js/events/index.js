import { initButtonEvents } from "./buttons.js";
import { initInfoCardEvents } from "./infoCards.js";
import { initDependencyModal } from "./dependencyModal.js";
import { initLicenseModal } from "./licenseModal.js";
import { initIncludesModal } from "./includesModal.js";
import { initSuccessModal } from "./successModal.js";

export function componentEventListeners() {
  initButtonEvents();
  initInfoCardEvents();
  initDependencyModal();
  initLicenseModal();
  initIncludesModal();
  initSuccessModal();
}