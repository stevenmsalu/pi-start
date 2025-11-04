import {
  projectNameInput,
  pythonSelector,
  dependenciesSelector,
  licenseSelector,
  includes,
  generateButton,
  sidebar
} from '../components/index.js';

export function homeUI() {
  const panelContainer = document.querySelector(".panel-body");
  const sidebarContainer = document. querySelector(".sidebar")
  const buttonContainer = document.querySelector(".panel-actions");

  panelContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${includes()}
  `;
  
  sidebarContainer.innerHTML = sidebar();

  buttonContainer.innerHTML = generateButton();
}
