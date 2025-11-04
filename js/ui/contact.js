import { sidebar } from "../components/index.js";

export function contactUI() {
  const sidebarContainer = document.querySelector(".sidebar");
  const panelContainer = document.querySelector(".panel-body");
  const actions = document.querySelector(".panel-actions");

  sidebarContainer.innerHTML = sidebar();
  actions.innerHTML = "";

  panelContainer.innerHTML = `
    <h2>Contact Us</h2>
    <p>Welcome to Contact us page</p>
  `;
}
