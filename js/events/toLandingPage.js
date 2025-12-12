import { loadPage } from '../router.js';

export function handleLandingPageIconClick() {
  const landingPageIcon = document.getElementById("homeIconForLandingPage");

  if (!landingPageIcon) return;

  landingPageIcon.addEventListener("click", () => {

    document.querySelector("header")?.classList.add("hidden");
    document.querySelector("footer")?.classList.add("hidden");
    document.querySelector(".sidebar")?.classList.add("hidden");
    document.querySelector(".panel-actions")?.classList.add("hidden");

    loadPage("landing");
  });
}