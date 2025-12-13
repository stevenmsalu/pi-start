import { loadPage } from '../router.js';

export function goToLandingPage() {
  document.querySelector("header")?.classList.add("hidden");
  document.querySelector("footer")?.classList.add("hidden");
  document.querySelector(".sidebar")?.classList.add("hidden");
  document.querySelector(".panel-actions")?.classList.add("hidden");

  loadPage("landing");
}