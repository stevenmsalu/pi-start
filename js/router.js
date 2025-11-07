import { homePage } from "./pages/home.js";

export function loadPage(page) {
  if (page === "home") return homePage();

  // fallback
  homePage();
}

export function handleRouteClick(e) {
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();
  const route = link.getAttribute("data-route");
  loadPage(route);
}
