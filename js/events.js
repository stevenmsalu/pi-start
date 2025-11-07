import { generateProject } from "./generator.js";

export function componentEventListeners() {

  // Project generator button
  const generateBtn = document.getElementById("generate-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", generateProject);
  }

  // Custom checkbox behavior
  document.querySelectorAll(".custom-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const input = e.target.closest("label").querySelector(".custom-input");

      if (e.target.checked) {
        input.style.display = "inline-block";
        input.focus();
      } else {
        input.style.display = "none";
        input.value = "";
      }
    });
  });
}