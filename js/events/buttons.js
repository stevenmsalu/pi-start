import { generateProject } from "../logic/generator/_index.js";
import { clearForm } from "../logic/clearForm.js";
import { applyResponsiveLabels } from "../utils.js";

export function initButtonEvents() {
  applyResponsiveLabels();

  const generateBtn = document.getElementById("generate-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", generateProject);
  }

  const clearBtn = document.getElementById("clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearForm);
  }
}