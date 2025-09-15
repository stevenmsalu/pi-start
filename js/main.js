import { projectNameInput, frameworkSelector, dependenciesSelector, licenseSelector, envToggle, generateButton } from './components.js';

const formContainer = document.querySelector('.form-section');

formContainer.innerHTML = `
  ${projectNameInput()}
  ${frameworkSelector()}
  ${dependenciesSelector()}
  ${licenseSelector()}
  ${envToggle()}
  ${generateButton()}
`;

// Add event listener to generate button
document.getElementById('generate-btn').addEventListener('click', () => {
  alert('Project generated! (placeholder)');
});
