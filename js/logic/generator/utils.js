
export function showLoadingOverlay() {
  let overlay = document.getElementById("loading-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.innerHTML = `<div class="loading-screen"><div class="spinner large"></div><p>Generating your project...</p></div>`;
    document.body.appendChild(overlay);
  }
  overlay.style.display = "flex";
}

export function hideLoadingOverlay() {
  const overlay = document.getElementById("loading-overlay");
  if (overlay) overlay.style.display = "none";
}