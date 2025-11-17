
function updateThemeIcon(isDark) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;

  icon.textContent = isDark ? "light_mode" : "dark_mode";
}

function updateGithubLogo(isDark) {
  const img = document.getElementById("githubLogo");
  if (!img) return;

  img.src = isDark ? "/assets/github-mark-white.svg" : "/assets/github-mark.svg";
}

export function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  const isDark = saved === "dark";

  if (isDark) {
    document.documentElement.classList.add("theme-dark");
  } else {
    document.documentElement.classList.remove("theme-dark");
  }

  updateThemeIcon(isDark);
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("theme-dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeIcon(isDark);
  updateGithubLogo(isDark);
}