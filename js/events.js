import { updatePreview } from './preview/index.js';
import { generateProject } from './generate.js';

export function registerEventListeners() {
  document.getElementById('generate-btn').addEventListener('click', () => {
    generateProject();
  });

  document.getElementById('project-name').addEventListener('input', () => {
    const selectedFramework = document.getElementById('framework').value;
    updatePreview(selectedFramework); 
  });

  document.getElementById('framework').addEventListener('change', (event) => {
    updatePreview(event.target.value); 
  });

  document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb =>
    cb.addEventListener('change', () => {
      const selectedFramework = document.getElementById('framework').value;
      updatePreview(selectedFramework); 
    })
  );

  document.getElementById('license').addEventListener('change', () => {
    const selectedFramework = document.getElementById('framework').value;
    updatePreview(selectedFramework); 
  });

  document.getElementById('env-toggle').addEventListener('change', () => {
    const selectedFramework = document.getElementById('framework').value;
    updatePreview(selectedFramework);
  });

  document.getElementById('gitignore-toggle').addEventListener('change', () => {
    const selectedFramework = document.getElementById('framework').value;
    updatePreview(selectedFramework);
  });

  // Initial call on page load to set the preview based on the selected framework
  const initialFramework = document.getElementById('framework').value;
  updatePreview(initialFramework);
}
