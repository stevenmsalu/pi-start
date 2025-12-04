
export const actionPanel = () => `
  <div class="center-panel-actions">
    <button id="generate-btn" class="button button-primary">Generate Project</button>

    <button id="clear-btn"
      class="button button-icon interactive"
      aria-label="Clear fields">
      <span class="material-icons">restart_alt</span>
    </button>
  </div>

  <!-- Success Modal -->
  <div class="modal-backdrop" id="successModal">
    <div class="modal-card">
      <div class="modal-header">
        <h2>Project Generated!</h2>
        <span class="material-icons close-modal" id="closeSuccessModal">close</span>
      </div>

      <div class="modal-body">
      
        <div class="modal-item">
          <div class="copy-code">
            <code id="createVenvCommand">python -m venv venv</code>
            <span id="copyCreateVenvBtn" class="material-icons icon-button">content_copy</span>
          </div>
          <small class="dep-desc" style="margin-left: 6px">Create a new virtual environment</small>
        </div>
        
        <div class="modal-item">
          <div class="copy-code">
            <code id="venvCommand">.\venv\Scripts\activate</code>
            <span id="copyVenvBtn" class="material-icons icon-button">content_copy</span>
          </div>
          <small class="dep-desc" style="margin-left: 6px">Activate your Python virtual environment</small>
        </div>

        <div class="modal-item">
          <div class="copy-code">
            <code id="requirementsCommand">pip install -r requirements.txt</code>
            <span id="copyRequirementsBtn" class="material-icons icon-button">content_copy</span>
          </div>
          <small class="dep-desc" style="margin-left: 6px">Install all Python dependencies listed in requirements.txt</small>
        </div>

        <div class="modal-item">
          <div class="copy-code">
            <code id="runCommand">py main.py</code>
            <span id="copyRunBtn" class="material-icons icon-button">content_copy</span>
          </div>
          <small class="dep-desc" style="margin-left: 6px">Run your project's main file</small>
        </div>

      </div>
    </div>
  </div>
`;