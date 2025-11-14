
export function validateForm() {
  const projectNameEl = document.getElementById("project-name");
  const projectName = projectNameEl?.value.trim();
  const projectNameError = document.getElementById("project-name-error");

  const pythonVersion = window.Alpine?.store("formState")?.selections?.pythonVersion;
  const pythonError = document.getElementById("python-version-error");

  let isValid = true;

  // Project Name 
  if (!projectName) {
    projectNameEl.classList.add("input-error");
    projectNameError.textContent = "Project name is required.";
    isValid = false;
  } else {
    projectNameEl.classList.remove("input-error");
    projectNameError.textContent = "";
  }

  // Python version
  const pythonBox = document.querySelector(".python-checkbox-group");

  if (!pythonVersion) {
    pythonError.textContent = "Please select a Python version.";
    pythonBox.classList.add("input-error");
    isValid = false;
  } else {
    pythonError.textContent = "";
    pythonBox.classList.remove("input-error");
  }

  return isValid;
}

window.validateForm = validateForm;