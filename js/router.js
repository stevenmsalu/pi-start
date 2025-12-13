import { homePage } from "./pages/home.js";
import { landingPage } from "./pages/landing.js";

export function loadPage(page) {
  const container = document.querySelector(".main-container");
  container.classList.remove("landing-mode");
  document.body.classList.remove("landing-mode");

  switch (page) {
    case "home":
      homePage();
      break;
    case "landing":
      landingPage();
      break;
    default:
      landingPage();
  }

  window.scrollTo(0, 0);
  document.dispatchEvent(new Event("pageLoaded"));
}

export function handleRouteClick(e) {
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();
  const route = link.getAttribute("data-route");
  loadPage(route);
}