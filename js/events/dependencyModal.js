
export function initDependencyModal() {
  const openBtn = document.getElementById("addDependencyBtn");
  const modal = document.getElementById("dependenciesModal");
  const closeBtn = document.getElementById("closeDependenciesModal");
  const saveBtn = document.getElementById("saveDependenciesBtn");

  if (!openBtn || !modal || !closeBtn || !saveBtn) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  saveBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === "dependenciesModal") {
      modal.style.display = "none";
    }
  });
}