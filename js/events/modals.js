import { selectedDependencies } from "../store.js";

// Restore checked states when modal opens
function restoreDependencyCheckboxes() {
  const checkboxes = document.querySelectorAll(
    "#dependenciesModal input[type='checkbox']"
  );

  checkboxes.forEach(cb => {
    cb.checked = selectedDependencies.has(cb.value);
  });
}

// Save checked states when clicking Done
function saveDependencySelections() {
  const checkboxes = document.querySelectorAll(
    "#dependenciesModal input[type='checkbox']"
  );

  checkboxes.forEach(cb => {
    if (cb.checked) {
      selectedDependencies.add(cb.value);
    } else {
      selectedDependencies.delete(cb.value);
    }
  });
}

// -------------------------------
// ✅ Reusable modal setup
// -------------------------------
function setupModal(openBtnId, modalId, closeBtnId, onOpen = null, onClose = null) {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  if (!openBtn || !modal || !closeBtn) return;

  // Open
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    if (onOpen) onOpen(); // ✅ Hook for dependency modal
  });

  // Close
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (onClose) onClose();
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === modalId) {
      modal.style.display = "none";
      if (onClose) onClose();
    }
  });
}

// -------------------------------
// ✅ Init all modals
// -------------------------------
export function initModalEvents() {

  // ✅ Dependency modal (with Done button)
  setupModal(
    "addDependencyBtn",
    "dependenciesModal",
    "closeDependenciesModal",
    () => restoreDependencyCheckboxes() // onOpen
  );

  // ✅ DONE button wiring
  const saveBtn = document.getElementById("saveDependenciesBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      saveDependencySelections();
      document.getElementById("dependenciesModal").style.display = "none";
    });
  }

  // ✅ Other modals unchanged
  setupModal("license-moreBtn", "licenseModal", "closeLicenseModal");
  setupModal("includes-moreBtn", "includesModal", "closeIncludesModal");
}
