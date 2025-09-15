// Components as template strings

// Project Name Input
export const projectNameInput = () => `
  <div class="form-group">
    <label for="project-name">Project Name:</label>
    <input type="text" id="project-name" placeholder="Enter project name">
  </div>
`;

// Framework Selection
export const frameworkSelector = () => `
  <div class="form-group">
    <label>Framework:</label>
    <select id="framework">
      <option value="none">None</option>
      <option value="flask">Flask</option>
      <option value="django">Django</option>
      <option value="fastapi">FastAPI</option>
    </select>
  </div>
`;

// Dependencies Selector
export const dependenciesSelector = () => `
  <div class="form-group">
    <label>Dependencies:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" value="requests"> requests</label>
      <label><input type="checkbox" value="numpy"> numpy</label>
      <label><input type="checkbox" value="pandas"> pandas</label>
    </div>
  </div>
`;

// License Selector
export const licenseSelector = () => `
  <div class="form-group">
    <label for="license">License:</label>
    <select id="license">
      <option value="none">None</option>
      <option value="mit">MIT</option>
      <option value="apache">Apache</option>
      <option value="gpl">GPL</option>
    </select>
  </div>
`;

// .env Toggle
export const envToggle = () => `
  <div class="form-group">
    <label><input type="checkbox" id="env-toggle"> Include .env file</label>
  </div>
`;

// Generate Button
export const generateButton = () => `
  <div class="form-group">
    <button id="generate-btn">Generate Project</button>
  </div>
`;
