import { goToLandingPage } from './toLandingPage.js';

export function initHeaderHomeLogo() {
  const headerLogo = document.getElementById("headerHomeLink");
  if (!headerLogo) return;

  headerLogo.addEventListener("click", goToLandingPage);
}
