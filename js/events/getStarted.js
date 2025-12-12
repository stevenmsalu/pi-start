import { loadPage } from '../router.js';

export function handleGetStartedClick() {
  const getStartedBtn = document.getElementById("get-started-btn");

  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      loadPage("home");
    });
  }
}