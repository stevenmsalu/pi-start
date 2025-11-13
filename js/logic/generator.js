import { clearForm } from "./clearForm.js";
import { showSuccessModal } from "../events/successModal.js";

export function generateProject() {
  const generateBtn = document.getElementById("generate-btn");

  // Set loading state
  generateBtn.disabled = true;
  generateBtn.innerHTML = `<span class="spinner"></span> Generating...`;
  showLoadingOverlay();

  const projectName = document.getElementById("project-name")?.value.trim() || "(none)";

  // Virtual environment logic
  let venvOutput = "(none)";
  const venvCheckbox = document.querySelector('input[value="Venv"]');
  const venvNameInput = document.getElementById("venv-name");
  if (venvCheckbox?.checked) {
    const inputValue = venvNameInput?.value.trim();
    venvOutput = inputValue || "venv";
  }

  // Try to access Alpine store if available
  let venv = [];
  let pythonVersion = [];
  let dependencies = [];
  let license = [];
  let includeOptions = [];

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

    // Show success modal
    showSuccessModal();
    
    setTimeout(() => {
      generateBtn.innerHTML = "Generate Project";
      generateBtn.disabled = false;
    }, 1500);
  }, 2000);

  // At End Clear Form 
  clearForm();
}

// Loading overlay helpers
function showLoadingOverlay() {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.innerHTML = `
      <div class="loading-screen">
        <div class="spinner large"></div>
        <p>Generating your project...</p>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  overlay.style.display = "flex";
}

function hideLoadingOverlay() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
}
