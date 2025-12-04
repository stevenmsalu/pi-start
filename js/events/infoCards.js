
export function initInfoCardEvents() {
  document.addEventListener("click", (e) => {
    const icon = e.target.closest(".info-icon");
    const backdrop = document.getElementById("blur-backdrop");

    if (icon) {
      const cardId = icon.dataset.info;
      const card = document.getElementById(cardId);
      const isOpen = card.classList.contains("open");

      // Close all
      document.querySelectorAll(".info-card").forEach((c) => { c.classList.remove("open") });
      backdrop.style.display = "none";

      // Open the selected one
      if (!isOpen) {
        card.classList.add("open");
        backdrop.style.display = "block";
      }
      return;
    }

    // Close when clicking outside
    if (!e.target.closest(".info-card")) {
      document.querySelectorAll(".info-card").forEach((c) => { c.classList.remove("open") });
      backdrop.style.display = "none";
    }
  });
}
