
export function applyResponsiveLabels() {
  const generateBtn = document.getElementById("generate-btn");
  if (!generateBtn) return;

  const isSmall = window.matchMedia("(max-width: 768px)").matches;

  // If button is in "success" state – leave it alone
  if (generateBtn.classList.contains("success")) return;

  generateBtn.textContent = isSmall ? "Generate" : "Generate Project";
}

// Automatically re-check on resize
window.addEventListener("resize", applyResponsiveLabels);