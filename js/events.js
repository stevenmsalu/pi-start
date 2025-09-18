import { generateProject } from './generate.js';

export function registerEventListeners() {
  // Generate Project button
  document.getElementById('generate-btn').addEventListener('click', () => {
    generateProject();
  });

  // Handle custom checkbox toggle
  document.querySelectorAll('.custom-checkbox').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const input = e.target.closest('label').querySelector('.custom-input');
      if (e.target.checked) {
        input.style.display = 'inline-block';
        input.focus();
      } else {
        input.style.display = 'none';
        input.value = '';
      }
    });
  });
}
