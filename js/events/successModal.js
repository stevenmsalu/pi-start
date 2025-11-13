export function initSuccessModal() {
    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementById("closeSuccessModal");
    const copyVenvBtn = document.getElementById("copyVenvBtn");
    const copyRunBtn = document.getElementById("copyRunBtn");
    const venvCommand = document.getElementById("venvCommand");
    const runCommand = document.getElementById("runCommand");

    if (!modal) return;

    // Close modal handlers
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target.id === "successModal") modal.style.display = "none";
    });

    // Copy buttons
    copyVenvBtn?.addEventListener("click", async () => {
        await navigator.clipboard.writeText(venvCommand.textContent.trim());
        copyVenvBtn.textContent = "Copied!";
        copyVenvBtn.classList.add("copied");
        setTimeout(() => {
            copyVenvBtn.textContent = "Copy";
            copyVenvBtn.classList.remove("copied");
        }, 1200);
    });

    copyRunBtn?.addEventListener("click", async () => {
        await navigator.clipboard.writeText(runCommand.textContent.trim());
        copyRunBtn.textContent = "Copied!";
        setTimeout(() => (copyRunBtn.textContent = "Copy"), 1200);
    });
}

// Auto-Adjust the venv command
const venvCmd = document.getElementById("venvCommand");
if (venvCmd) {
    venvCmd.textContent = `.${venvOutput}\\Scripts\\activate`;
}

// Helper to show the modal externally
export function showSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) modal.style.display = "flex";
}
