
export function initIncludesModal() {
  const openBtn = document.getElementById("includes-moreBtn");
  const modal = document.getElementById("includesModal");
  const closeBtn = document.getElementById("closeIncludesModal");
  const saveBtn = document.getElementById("saveIncludesBtn");

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
    if (e.target.id === "includesModal") {
      modal.style.display = "none";
    }
  });
}