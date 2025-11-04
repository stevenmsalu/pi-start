import { sidebar } from "../components/index.js";

export function docsUI() {
  const sidebarContainer = document.querySelector(".sidebar");
  const panelContainer = document.querySelector(".panel-body");

  sidebarContainer.innerHTML = sidebar();

  panelContainer.innerHTML = `
    <h2>Documentation</h2>
    <p>Welcome to the docs page. Add your docs content here.</p>
  `;
}

document.addEventListener("DOMContentLoaded", docsUI);
