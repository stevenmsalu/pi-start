// preview/index.js
import { noFrameworkTree } from '../trees/noFramework.js'; 
import { updateName } from './updateName.js';  
import { updateFramework } from './updateFramework.js';  
import { updateDependencies } from './updateDependencies.js';
import { updateLicense } from './updateLicense.js';  
import { updateIncludes } from './updateIncludes.js';
import { initFileTree } from '../trees/index.js';

export function updatePreview(selectedFramework) {
  const previewContainer = document.getElementById('preview-container');

  // Create a fresh tree element
  let treeRoot = document.createElement("div");

  if (selectedFramework === "none") {
    treeRoot.innerHTML = noFrameworkTree;
  } else if (selectedFramework === "flask") {
    treeRoot.innerHTML = '<p>Flask preview tree (coming soon)</p>';
  } else if (selectedFramework === "django") {
    treeRoot.innerHTML = '<p>Django preview tree (coming soon)</p>';
  } else if (selectedFramework === "fastapi") {
    treeRoot.innerHTML = '<p>FastAPI preview tree (coming soon)</p>';
  } else {
    treeRoot.innerHTML = "";
  }

  // Replace only the tree, not the editor container
  previewContainer.innerHTML = "";
  previewContainer.appendChild(treeRoot);

  // Safe updates
  updateName();
  updateFramework(selectedFramework);
  updateDependencies();
  updateLicense();
  updateIncludes();

  // Re-init file tree interactions
  initFileTree();
}
