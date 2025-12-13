import { initButtonEvents } from "./buttons.js";
import { initInfoCardEvents } from "./infoCards.js";
import { initDependencyModal } from "./dependencyModal.js";
import { initLicenseModal } from "./licenseModal.js";
import { initIncludesModal } from "./includesModal.js";
import { initSuccessModal } from "./successModal.js";
import { handleGetStartedClick } from "./getStarted.js";
import { handleLandingPageIconClick } from "./toLandingPage.js";

export function uiEventListeners() {
  initButtonEvents();
  initInfoCardEvents();
  initDependencyModal();
  initLicenseModal();
  initIncludesModal();
  initSuccessModal();
  handleGetStartedClick();
  handleLandingPageIconClick();
}