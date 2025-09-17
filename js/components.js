
export const projectNameInput = () => `
  <div class="form-group">
    <label for="project-name">Project Name:</label>
    <input type="text" id="project-name" placeholder="Enter project name">
  </div>
`;

export const pythonSelector = () => `
  <div class="form-group">
    <label>Python Version:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="python-checkbox" value="3.13.0">@Latest</label>
      <label><input type="checkbox" class="python-checkbox" value="3.9.5">LTS</label>
      <label><input type="checkbox" class="python-checkbox" value="custom">Custom</label>
    </div>
  </div>
`;

export const frameworkSelector = () => `
  <div class="form-group">
    <label>Framework:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="framework-checkbox" value="flask">Flask</label>
      <label><input type="checkbox" class="framework-checkbox" value="django">Django</label>
      <label><input type="checkbox" class="framework-checkbox" value="fastapi">FastApi</label>
    </div>
  </div>
`;

export const dependenciesSelector = () => `
  <div class="form-group">
    <label>Dependencies:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="dependencies-checkbox" value="Floe">Floe</label>
      <label><input type="checkbox" class="dependencies-checkbox" value="Numpy">Numpy</label>
      <label><input type="checkbox" class="dependencies-checkbox" value="Other">Other</label>
    </div>
  </div>
`;

export const licenseSelector = () => `
  <div class="form-group">
    <label for="license">License:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="license-checkbox" value="mit">MIT</label>
      <label><input type="checkbox" class="license-checkbox" value="apache">Apache</label>
      <label><input type="checkbox" class="license-checkbox" value="gnu">GNU</label>
    </div>
  </div>
`;

export const optionalToggle = () => `
  <div class="form-group">
    <label for="includes">Include:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="includes-checkbox" value=".env" id="env-toggle">.env</label>
      <label><input type="checkbox" class="includes-checkbox" value=".gitignore" id="gitignore-toggle">.gitignore</label>
      <label><input type="checkbox" class="includes-checkbox" value=".gitignore" id="readme-toggle">README</label>
    </div>
  </div>
`;

export const generateButton = () => `
  <div class="form-group">
    <button id="generate-btn">Generate Project</button>
  </div>
`;

export const previewSection = () => `
  <h2>Live Preview</h2>

  <div class="file-tree" id="preview-container">
    <!-- Tree content will be dynamically injected here -->
  </div>
`;

