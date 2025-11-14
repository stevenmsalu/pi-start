import { clearForm } from "./clearForm.js";
import { showSuccessModal } from "../events/successModal.js";
import { validateForm } from "./validator.js";

export function generateProject() {
  if (!validateForm()) return;

  const generateBtn = document.getElementById("generate-btn");
  generateBtn.disabled = true;
  generateBtn.innerHTML = `<span class="spinner"></span> Generating...`;
  showLoadingOverlay();

  const projectName = document.getElementById("project-name")?.value.trim() || "(none)";

  // Virtual environment logic
  let venvOutput = "(none)";
  const venvCheckbox = document.querySelector('input[value="Venv"]');
  const venvNameInput = document.getElementById("venv-name");
  const venvModalItem = document.querySelector('.modal-item:has(#venvCommand)');

  if (venvCheckbox?.checked) {
    const inputValue = venvNameInput?.value.trim();
    venvOutput = inputValue || "venv";
    const venvCmd = document.getElementById("venvCommand");
    if (venvCmd) venvCmd.textContent = `.\\${venvOutput}\\Scripts\\activate`;
    if (venvModalItem) venvModalItem.classList.remove('hidden');
  } else {
    if (venvModalItem) venvModalItem.classList.add('hidden');
  }

  // Requirements command logic
  const reqCheckbox = document.querySelector('input[value="requirements.txt"]');
  const reqModalItem = document.querySelector('.modal-item:has(#requirementsCommand)');
  if (reqCheckbox?.checked) {
    document.getElementById("requirementsCommand").textContent = "pip install -r requirements.txt";
    reqModalItem.classList.remove("hidden");
  } else {
    reqModalItem.classList.add("hidden");
  }

  // Run command logic
  let runModalItem = document.querySelector('.modal-item:has(#runCommand)');
  const mainPyCheckbox = document.querySelector('input[value="main.py"]');
  if (mainPyCheckbox?.checked) {
    const runCmd = document.getElementById("runCommand");
    if (runCmd) runCmd.textContent = "python main.py";
    if (runModalItem) runModalItem.classList.remove("hidden");
  } else {
    if (runModalItem) runModalItem.classList.add("hidden");
  }

  // Try to access Alpine store if available
  let venv = [], pythonVersion = [], dependencies = [], license = [], includeOptions = [];
  try {
    const store = window.Alpine?.store("formState");
    if (store && store.data) {
      pythonVersion = store.data.pythonVersion || [];
      venv = store.data.venv || [];
      dependencies = store.data.dependencies || [];
      license = store.data.license || [];
      includeOptions = store.data.includeOptions || [];
    }
  } catch (err) {
    console.warn("⚠️ Could not access Alpine store, falling back to DOM parsing.");
  }

  // Fallbacks for missing store data
  if (pythonVersion.length === 0) {
    pythonVersion = [...document.querySelectorAll('input[value^="3."]')]
      .filter(el => el.checked)
      .map(el => el.value);
  }
  if (dependencies.length === 0) {
    dependencies = [...document.querySelectorAll('#dependenciesModal input[type="checkbox"]')]
      .filter(el => el.checked)
      .map(el => el.value);
  }
  if (license.length === 0) {
    license = [...document.querySelectorAll('#licenseModal input[type="checkbox"], .form-group input[value="mit"], .form-group input[value="apache"]')]
      .filter(el => el.checked)
      .map(el => el.value);
  }
  if (includeOptions.length === 0) {
    includeOptions = [...document.querySelectorAll('.includes-checkbox')]
      .filter(el => el.checked)
      .map(el => el.value);
  }

  // Log summary
  console.clear();
  console.group("Project Configuration Summary");
  console.log("📁 Project Name:", projectName);
  console.log("🧩 Virtual Environment:", venvOutput);
  console.log("🐍 Python Version:", pythonVersion.join(", ") || "(none)");
  console.log("📦 Dependencies:", dependencies.join(", ") || "(none)");
  console.log("📄 License:", license.join(", ") || "(none)");
  console.log("📄 Include Options:", includeOptions.join(", ") || "(none)");
  console.groupEnd();

  // Simulate processing delay
  setTimeout(() => {
    hideLoadingOverlay();
    generateBtn.innerHTML = "Success!";
    showSuccessModal();
    setTimeout(() => {
      generateBtn.innerHTML = "Generate Project";
      generateBtn.disabled = false;
    }, 1500);
  }, 2000);

  clearForm(); // At End Clear Form
}

// Loading overlay helpers
function showLoadingOverlay() {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.innerHTML = `<div class="loading-screen"><div class="spinner large"></div><p>Generating your project...</p></div>`;
    document.body.appendChild(overlay);
  }
  overlay.style.display = "flex";
}

function hideLoadingOverlay() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
}