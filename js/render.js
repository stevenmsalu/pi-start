import {
  projectNameInput,
  pythonSelector,
  dependenciesSelector,
  licenseSelector,
  includes,
  generateButton,
  navbar
} from './components/_index.js';

export function renderUI() {
  const formContainer = document.querySelector(".form-section");
  const navContainer = document. querySelector(".vertical-navbar")
  const buttonContainer = document.querySelector(".button-container");

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${includes()}
  `;
  
  navContainer.innerHTML = navbar();

  buttonContainer.innerHTML = generateButton();
}
