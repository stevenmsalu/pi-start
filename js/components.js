
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
      <label><input type="checkbox" class="python-checkbox" value="3.9.5">@3.9.5(LTS)</label>
      <label>
        <input type="checkbox" class="python-checkbox custom-checkbox" value="custom">Custom
        <input type="text" class="custom-input" placeholder="Enter version" style="display:none; margin-left: 8px;" />
      </label>
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
      <label><input type="checkbox" class="dependencies-checkbox" value="More">More</label>
    </div>
  </div>
`;

export const licenseSelector = () => `
  <div class="form-group">
    <label for="license">License:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="license-checkbox" value="mit">MIT</label>
      <label><input type="checkbox" class="license-checkbox" value="apache">Apache 2.0</label>
      <label><input type="checkbox" class="license-checkbox" value="gnu">GNU</label>
      <label><input type="checkbox" class="license-checkbox" value="more">More</label>
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

export const navbar = () => `
  <div class="nav-top">
    <a href="index.html" title="Mode"><span class="material-icons">light_mode</span></a>
    <a href="index.html" title="Initializer"><span class="material-icons">home</span></a>
    <a href="docs.html" title="Docs"><span class="material-icons">description</span></a>
    <a href="contact.html" title="Contact"><span class="material-icons">help</span></a>
  </div>
  <div class="nav-bottom">
    <a href="https://github.com/stevenmsalu/pie-init" target="_blank" title="GitHub">
      <i class="ti ti-brand-github"></i>
    </a>
  </div>
`;

