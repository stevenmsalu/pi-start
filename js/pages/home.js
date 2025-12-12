import {
  projectNameInput,
  VirtualEnvSelector,
  pythonSelector,
  dependenciesSelector,
  licenseSelector,
  includesSelector,
  actionPanel,
  sidebar,
  header,
  footer
} from '../ui/_index.js';

import { handleLandingPageIconClick } from '../events/toLandingPage.js';

export function homePage() {

  // Restore app shell visibility
  document.querySelector("header")?.classList.remove("hidden");
  document.querySelector("footer")?.classList.remove("hidden");
  document.querySelector(".sidebar")?.classList.remove("hidden");
  document.querySelector(".panel-actions")?.classList.remove("hidden");

  // Rebuild destroyed layout
  const main = document.querySelector(".main-container");
  main.innerHTML = `
    <nav class="sidebar"></nav>

    <section class="panel">
      <div class="panel-body"></div>
      <div class="panel-actions"></div>
    </section>
  `;

  // populate homepage
  const headerEl = document.querySelector("header");
  const footerEl = document.querySelector("footer");
  const panelContainer = document.querySelector(".panel-body");
  const sidebarContainer = document.querySelector(".sidebar");
  const buttonContainer = document.querySelector(".panel-actions");

  panelContainer.innerHTML = `
    ${projectNameInput()}
    ${VirtualEnvSelector()}
    ${pythonSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${includesSelector()}
  `;

  headerEl.innerHTML = header();
  footerEl.innerHTML = footer();
  sidebarContainer.innerHTML = sidebar();
  buttonContainer.innerHTML = actionPanel();

  handleLandingPageIconClick();
}