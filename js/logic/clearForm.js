
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
    generateBtn.textContent = "Generate Project";
    generateBtn.classList.remove('success');
  }

  // Reset Alpine Global Store
  if (window.Alpine && Alpine.store('formState')) {
    const store = Alpine.store('formState').clearAll();
  }

  console.log('🧹 Form cleared. Alpine state reset.');
}
