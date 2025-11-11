
export function initInfoCardEvents() {
  document.addEventListener("click", (e) => {
    const icon = e.target.closest(".info-icon");
    const backdrop = document.getElementById("blur-backdrop");

    if (icon) {
      const cardId = icon.dataset.info;
      const card = document.getElementById(cardId);
      const isOpen = card.style.display === "block";

      document.querySelectorAll(".info-card").forEach((c) => (c.style.display = "none"));
      backdrop.style.display = "none";

      if (!isOpen) {
        card.style.display = "block";
        backdrop.style.display = "block";
      }
      return;
    }

    // Close if clicked outside
    if (!e.target.closest(".info-card")) {
      document.querySelectorAll(".info-card").forEach((c) => (c.style.display = "none"));
      backdrop.style.display = "none";
    }
  });
}
