import { sidebar } from "../components/_index.js";

export function contactUI() {
  const sidebarContainer = document.querySelector(".sidebar");
  const panelContainer = document.querySelector(".panel-body");

  sidebarContainer.innerHTML = sidebar();

  panelContainer.innerHTML = `
    <h2>Contact US</h2>
    <p>Welcome to Contact us page</p>
  `;
}

document.addEventListener("DOMContentLoaded", contactUI);
