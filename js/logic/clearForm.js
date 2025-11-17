
export function clearForm() {
  const textInputs = document.querySelectorAll('input[type="text"], input[type="search"]');
  textInputs.forEach(input => input.value = '');

  const selects = document.querySelectorAll('select');
  selects.forEach(select => select.selectedIndex = 0);

  // Uncheck all non-Alpine checkboxes (just a safety fallback)
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(box => box.checked = false);

  // Close dependency modal if open
  const depModal = document.getElementById('dependenciesModal');
  if (depModal) depModal.style.display = 'none';

  // Reset generate button state
  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.textContent = "Generate";
    generateBtn.classList.remove('success');
  }

  // Clear validator UI
  const projectNameEl = document.getElementById("project-name");
  const projectNameError = document.getElementById("project-name-error");
  const pythonError = document.getElementById("python-version-error");
  const pythonBox = document.querySelector(".python-checkbox-group");

  // Clear project name validation
  if (projectNameEl) projectNameEl.classList.remove("input-error");
  if (projectNameError) projectNameError.textContent = "";

  // Clear Python version validation
  if (pythonError) pythonError.textContent = "";
  if (pythonBox) pythonBox.classList.remove("input-error");

  // Clear any other potential validation errors
  document.querySelectorAll('[id$="-error"]').forEach(el => el.textContent = "");
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

  // Reset Alpine Global Store
  if (window.Alpine && Alpine.store('formState')) {
    const store = Alpine.store('formState').clearAll();
  }
}