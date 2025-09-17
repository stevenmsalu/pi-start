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
  const previewContainer = document.querySelector('.preview-section');

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${pythonSelector()}
    ${frameworkSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${optionalToggle()}
    ${generateButton()}
  `;

  previewContainer.innerHTML = previewSection();
}
