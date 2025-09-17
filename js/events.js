import { generateProject } from './generate.js';

export function registerEventListeners() {
  document.getElementById('generate-btn').addEventListener('click', () => {
    generateProject();
  });
}
