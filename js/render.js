import {
  projectNameInput,
  pythonSelector,
  dependenciesSelector,
  licenseSelector,
  includes,
  generateButton,
  sidebar
} from './components/_index.js';

export function renderUI() {
  const formContainer = document.querySelector(".panel-body");
  const navContainer = document. querySelector(".sidebar")
  const buttonContainer = document.querySelector(".panel-actions");

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${includes()}
  `;
  
  navContainer.innerHTML = sidebar();

  buttonContainer.innerHTML = generateButton();
}
