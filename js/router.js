import { homePage } from "./pages/home.js";
import { landingPage } from "./pages/landing.js";

export function loadPage(page) {
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

  document.dispatchEvent(new Event("pageLoaded"));
}

export function handleRouteClick(e) {
  const link = e.target.closest("[data-route]");
  if (!link) return;
  
  e.preventDefault();
  const route = link.getAttribute("data-route");
  loadPage(route);
}