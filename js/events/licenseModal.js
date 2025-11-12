
export function initLicenseModal() {
  const openBtn = document.getElementById("license-moreBtn");
  const modal = document.getElementById("licenseModal");
  const closeBtn = document.getElementById("closeLicenseModal");
  const saveBtn = document.getElementById("saveLicenseBtn");

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
    if (e.target.id === "licenseModal") {
      modal.style.display = "none";
    }
  });
}
