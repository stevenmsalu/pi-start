
export function initDependencyModal() {
  const openBtn = document.getElementById("addDependencyBtn");
  const modal = document.getElementById("dependenciesModal");
  const closeBtn = document.getElementById("closeDependenciesModal");

  if (!openBtn || !modal || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  function swapIcon(newIcon) {
    closeBtn.classList.add("fading");

    setTimeout(() => {
      closeBtn.textContent = newIcon;
      closeBtn.classList.remove("fading");
    }, 150); 
  }

  closeBtn.addEventListener("mouseenter", () => swapIcon("check"));
  closeBtn.addEventListener("mouseleave", () => swapIcon("close"));

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target.id === "dependenciesModal") {
      modal.style.display = "none";
    }
  });
}