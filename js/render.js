import {
  projectNameInput,
  pythonSelector,
  frameworkSelector,
  dependenciesSelector,
  licenseSelector,
  optionalToggle,
  generateButton,
  navbar
} from './components.js';

export function renderUI() {
  const formContainer = document.querySelector(".form-section");
  const navContainer = document. querySelector(".vertical-navbar")
  const buttonContainer = document.querySelector(".button-container");

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${frameworkSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${optionalToggle()}
  `;
  
  navContainer.innerHTML = navbar();

  buttonContainer.innerHTML = generateButton();
}
