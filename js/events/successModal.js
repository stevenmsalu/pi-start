
export function initSuccessModal() {
    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementById("closeSuccessModal");
    const copyVenvBtn = document.getElementById("copyVenvBtn");
    const copyRunBtn = document.getElementById("copyRunBtn");
    const venvCommand = document.getElementById("venvCommand");
    const runCommand = document.getElementById("runCommand");

    if (!modal) return;

    // Close modal handlers

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
        if (e.target.id === "successModal") modal.style.display = "none";
    });

    // Copy buttons
    copyVenvBtn?.addEventListener("click", async () => {
        await navigator.clipboard.writeText(venvCommand.textContent.trim());

        copyVenvBtn.textContent = "done";
        copyVenvBtn.classList.add("copied");

        setTimeout(() => {
            copyVenvBtn.textContent = "content_copy";
            copyVenvBtn.classList.remove("copied");
        }, 1200);
    });

    copyRunBtn?.addEventListener("click", async () => {
        // FIXED: Copy runCommand instead of venvCommand
        await navigator.clipboard.writeText(runCommand.textContent.trim());

        copyRunBtn.textContent = "done";
        copyRunBtn.classList.add("copied");

        setTimeout(() => {
            copyRunBtn.textContent = "content_copy";
            copyRunBtn.classList.remove("copied");
        }, 1200);
    });
}

// Helper to show the modal externally
export function showSuccessModal() {
    const modal = document.getElementById("successModal");
    if (modal) modal.style.display = "flex";
}