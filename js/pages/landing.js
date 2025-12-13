import { welcomePage } from '../ui/_index.js';
import { handleGetStartedClick } from "../events/getStarted.js";
import { initComingSoonModal } from '../events/coming-soonModal.js';

export function landingPage() {
  const landingPageContainer = document.querySelector(".main-container");
  landingPageContainer.classList.add("landing-mode");
  document.body.classList.add("landing-mode");

  landingPageContainer.innerHTML = welcomePage();

  handleGetStartedClick();
  initComingSoonModal();
}