// Import your state stores
import { selectedDependencies } from "../store.js";
import { selectedIncludes } from "../store.js";
import { selectedLicense } from "../store.js";

export function clearForm() {

  // ✅ Clear text & search inputs
  const textInputs = document.querySelectorAll('input[type="text"], input[type="search"]');
  textInputs.forEach(input => input.value = '');

  // ✅ Reset <select>
  const selects = document.querySelectorAll('select');
  selects.forEach(select => select.selectedIndex = 0);

  // ✅ Uncheck all checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => box.checked = false);

  // ✅ Reset venv toggle
  const venvToggle = document.getElementById('venv-toggle');
  if (venvToggle) venvToggle.checked = false;

  // ✅ Close dependency modal if open
  const depModal = document.getElementById('dependenciesModal');
  if (depModal) depModal.style.display = 'none';

  // ✅ Reset generate button state
  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.textContent = "Generate Project";
    generateBtn.classList.remove('success');
  }

  // ✅ Reset state stores
  selectedDependencies.clear();
  selectedIncludes.clear();
  selectedLicense.value = null; // or selectedLicense = null depending on your model
}
