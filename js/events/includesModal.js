
export function initIncludesModal() {
  const openBtn = document.getElementById("includes-moreBtn");
  const modal = document.getElementById("includesModal");
  const closeBtn = document.getElementById("closeIncludesModal");

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
    if (e.target.id === "includesModal") {
      modal.style.display = "none";
    }
  });
}