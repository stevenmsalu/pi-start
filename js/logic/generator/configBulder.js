
export function buildProjectConfig() {
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

  // Create Venv command logic
  const createVenvCmd = document.getElementById("createVenvCommand");
  let createVenvModalItem = document.querySelector('.modal-item:has(#createVenvCommand)');

  if (venvCheckbox?.checked) {
    const inputValue = venvNameInput?.value.trim();
    const venvName = inputValue || "venv";

    if (createVenvCmd) createVenvCmd.textContent = `python -m venv ${venvName}`;
    if (createVenvModalItem) createVenvModalItem.classList.remove("hidden");

  } else {
    if (createVenvModalItem) createVenvModalItem.classList.add("hidden");
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
  let venv = [], pythonVersion = "", dependencies = [], license = "", includeOptions = [];
  try {
    const store = window.Alpine?.store("formState");
    if (store && store.data) {
      pythonVersion = store.data.pythonVersion || "";
      venv = store.data.venv || [];
      dependencies = store.data.dependencies || [];
      license = store.data.license || "";
      includeOptions = store.data.includeOptions || [];
    }
  } catch (err) {
    console.warn("⚠️ Could not access Alpine store, falling back to DOM parsing.");
  }

  // Fallbacks for missing store data
  if (!pythonVersion) {
    const checked = document.querySelector('input[value^="3."]:checked');
    pythonVersion = checked ? checked.value : "";
  }

  if (dependencies.length === 0) {
    dependencies = [...document.querySelectorAll('#dependenciesModal input[type="checkbox"]')]
      .filter(el => el.checked)
      .map(el => el.value);
  }

  if (!license) {
    const selectedLicense = document.querySelector(
      '#licenseModal input[type="checkbox"]:checked, .form-field input[value="mit"]:checked, .form-field input[value="apache"]:checked'
    );
    license = selectedLicense ? selectedLicense.value : "";
  }

  if (includeOptions.length === 0) {
    includeOptions = [...document.querySelectorAll('.includes-checkbox')]
      .filter(el => el.checked)
      .map(el => el.value);
  }

  return {
    project_name: projectName,
    virtual_environment: venvOutput,
    python_version: pythonVersion,
    dependencies: dependencies,
    license: license,
    includes: includeOptions
  };
}
