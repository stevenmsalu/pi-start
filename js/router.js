import { homeUI } from "./ui/home.js";
import { docsUI } from "./ui/docs.js";
import { contactUI } from "./ui/contact.js";

export function loadPage(page) {
  if (page === "home") return homeUI();
  if (page === "docs") return docsUI();
  if (page === "contact") return contactUI();

  // fallback
  homeUI();
}
