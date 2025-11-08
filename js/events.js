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

  // Hidden Info Card 
  document.addEventListener("click", (e) => {
    const icon = e.target.closest(".info-icon");

    // If clicked on icon → toggle its card
    if (icon) {
      const cardId = icon.dataset.info;
      const card = document.getElementById(cardId);
      const isOpen = card.style.display === "block";

      // Close all cards
      document.querySelectorAll(".info-card").forEach(c => c.style.display = "none");

      // Toggle this one
      if (!isOpen) card.style.display = "block";

      return;
    }

    // If clicked outside any card → close all
    if (!e.target.closest(".info-card")) {
      document.querySelectorAll(".info-card").forEach(c => c.style.display = "none");
    }
  });
  
}