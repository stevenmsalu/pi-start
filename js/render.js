import {
  projectNameInput,
  pythonSelector,
  frameworkSelector,
  dependenciesSelector,
  licenseSelector,
  optionalToggle,
  generateButton,
  previewSection
} from './components.js';

export function renderUI() {
  const formContainer = document.querySelector('.form-section');
  const buttonContainer = document.querySelector('.button-container');
  const previewContainer = document.querySelector('.preview-section');

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${frameworkSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${optionalToggle()}
  `;

  buttonContainer.innerHTML = generateButton();
}
