import { generateProject } from './generator.js';

export function registerEventListeners() {
  document.getElementById('generate-btn').addEventListener('click', () => {
    generateProject();
  });

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

  const toggle = document.getElementById("modeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("theme-dark");

      const isDark = document.documentElement.classList.contains("theme-dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
}

