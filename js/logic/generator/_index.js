import { buildProjectConfig } from "./configBulder.js";
import { generatePythonProject } from "./pyGenerator.js";
import { downloadZip } from "./zipDownloader.js";
import { clearForm } from "../clearForm.js";
import { showSuccessModal } from "../../events/successModal.js";
import { validateForm } from "../validator.js";
import { showLoadingOverlay, hideLoadingOverlay } from "./utils.js";
import { applyResponsiveLabels } from "../../utils.js";

export async function generateProject() {
  if (!validateForm()) return;

  const generateBtn = document.getElementById("generate-btn");
  generateBtn.disabled = true;
  generateBtn.innerHTML = `<span class="spinner"></span> Generating...`;
  showLoadingOverlay();

  const config = buildProjectConfig();

  console.group("JSON Project Configuration");
  console.log(JSON.stringify(config, null, 2));
  console.groupEnd();

  try {
    // 1. Run Python generator inside Pyodide
    const fileTree = await generatePythonProject(config);

    // 2. Trigger download
    await downloadZip(fileTree, config.project_name);

    // Existing success animation
    hideLoadingOverlay();
    generateBtn.innerHTML = "Success!";
    generateBtn.classList.add("success");
    showSuccessModal();

  } catch (err) {
    console.error("Generation failed:", err);
    alert("Something went wrong during generation.");

  } finally {
    setTimeout(() => {
      generateBtn.classList.remove("success");
      generateBtn.disabled = false;
      applyResponsiveLabels();
    }, 1500);

    clearForm();
  }
}