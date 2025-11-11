import { generateProject } from "../logic/generator.js";
import { clearForm } from "../logic/clearForm.js";

export function initButtonEvents() {
  // Project generator button
  const generateBtn = document.getElementById("generate-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", generateProject);
  }

  // Clear Project Form & Feedback
  const clearBtn = document.getElementById("clear-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      clearForm();
      clearBtn.textContent = "Cleared!";
      setTimeout(() => (clearBtn.textContent = "Clear"), 1200);
    });
  }
}
