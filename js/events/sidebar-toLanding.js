import { goToLandingPage } from './toLandingPage.js';

export function initSidebarHomeButton() {
  const homeIcon = document.getElementById("homeIconForLandingPage");
  if (!homeIcon) return;

  homeIcon.addEventListener("click", goToLandingPage);
}
