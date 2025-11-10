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
    const backdrop = document.getElementById("blur-backdrop");

    if (icon) {
      const cardId = icon.dataset.info;
      const card = document.getElementById(cardId);
      const isOpen = card.style.display === "block";

      // Close all cards
      document.querySelectorAll(".info-card").forEach(c => c.style.display = "none");
      backdrop.style.display = "none";

      // Open card if it was not already open
      if (!isOpen) {
        card.style.display = "block";
        backdrop.style.display = "block";
      }
      return;
    }

    // If clicked outside any card
    if (!e.target.closest(".info-card")) {
      document.querySelectorAll(".info-card").forEach(c => c.style.display = "none");
      backdrop.style.display = "none";
    }
  });

  // OPEN MODAL - Add Dependencies
  document.getElementById("addDependencyBtn").addEventListener("click", () => {
    document.getElementById("dependenciesModal").style.display = "flex";
  });

  // CLOSE MODAL
  document.getElementById("closeDependenciesModal").addEventListener("click", () => {
    document.getElementById("dependenciesModal").style.display = "none";
  });

  // OPTIONAL: click outside closes modal
  document.getElementById("dependenciesModal").addEventListener("click", (e) => {
    if (e.target.id === "dependenciesModal") {
      e.target.style.display = "none";
    }
  });

  // OPEN MODAL - License 
  document.getElementById("license-moreBtn").addEventListener("click", () => {
    document.getElementById("licenseModal").style.display = "flex";
  });

  // CLOSE MODAL
  document.getElementById("closeLicenseModal").addEventListener("click", () => {
    document.getElementById("licenseModal").style.display = "none";
  });

  // OPTIONAL: click outside closes modal
  document.getElementById("licenseModal").addEventListener("click", (e) => {
    if (e.target.id === "licenseModal") {
      e.target.style.display = "none";
    }
  });

  // OPEN MODAL - Include
  document.getElementById("includes-moreBtn").addEventListener("click", () => {
    document.getElementById("includesModal").style.display = "flex";
  });

  // CLOSE MODAL
  document.getElementById("closeIncludesModal").addEventListener("click", () => {
    document.getElementById("includesModal").style.display = "none";
  });

  // OPTIONAL: click outside closes modal
  document.getElementById("includesModal").addEventListener("click", (e) => {
    if (e.target.id === "includesModal") {
      e.target.style.display = "none";
    }
  });

}