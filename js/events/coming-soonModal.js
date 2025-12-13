
export function initComingSoonModal() {
  const supportBtn = document.getElementById("support-btn");
  const modal = document.getElementById("support-modal");
  const closeBtn = modal?.querySelector(".ui-modal__close");

  if (!supportBtn || !modal || !closeBtn) return;

  supportBtn.addEventListener("click", () => {
    modal.classList.add("is-open");
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

  function closeModal() {
    modal.classList.remove("is-open");
    swapIcon("close"); 
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("ui-modal__overlay")
    ) {
      closeModal();
    }
  });
}