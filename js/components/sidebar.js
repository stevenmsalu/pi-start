
export const sidebar = () => {
  const saved = localStorage.getItem("theme") || "light";
  const logo = saved === "dark"
    ? "/assets/github-mark-white.svg"
    : "/assets/github-mark.svg";

  return `
    <div class="nav-top">
      <a href="javascript:void(0)" id="modeToggle" title="Toggle Theme">
        <span id="themeIcon" class="material-icons">dark_mode</span>
      </a>
    </div>

    <div class="nav-bottom">
      <a href="https://github.com/stevenmsalu/pi-start" target="_blank" title="GitHub">
        <img id="githubLogo" src="${logo}" class="ti" alt="GitHub Logo">
      </a>
    </div>
  `;
};