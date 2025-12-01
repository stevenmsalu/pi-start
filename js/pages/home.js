import {
  projectNameInput,
  VirtualEnvSelector,
  pythonSelector,
  dependenciesSelector,
  licenseSelector,
  includesSelector,
  actionPanel,
  sidebar
} from '../ui/_index.js';

export function homePage() {
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
  
  sidebarContainer.innerHTML = sidebar();
  buttonContainer.innerHTML = actionPanel();
}
