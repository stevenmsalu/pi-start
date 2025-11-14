
export const projectNameInput = () => `
  <div class="form-group">
    
    <div class="label-row">
      <label for="project-name">Project Name</label>
      <span class="material-icons info-icon" data-info="project-name-info">info</span>
    </div>

    <input type="text" id="project-name" placeholder="Enter project name">

    <p class="error-msg" id="project-name-error"></p>

    <div class="info-card" id="project-name-info">
      <content>Your project name should follow these rules:</content>
      <ul>
        <li>Use lowercase letters only</li>
        <li>No spaces — use hyphens or underscores</li>
        <li>Keep it short and meaningful</li>
      </ul>
    </div>

  </div>
`;
