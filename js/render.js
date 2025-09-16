import {
  projectNameInput,
  frameworkSelector,
  dependenciesSelector,
  licenseSelector,
  optionalToggle,
  generateButton,
  previewSection
} from './components/_index.js';

export function renderUI() {
  const formContainer = document.querySelector('.form-section');
  const previewContainer = document.querySelector('.preview-section');

  formContainer.innerHTML = `
    ${projectNameInput()}
    ${frameworkSelector()}
    ${dependenciesSelector()}
    ${licenseSelector()}
    ${optionalToggle()}
    ${generateButton()}
  `;

  previewContainer.innerHTML = previewSection();
}
