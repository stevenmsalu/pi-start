
export const actionPanel = () => `
  <div class="center-button">
    <button id="generate-btn" class="button-primary">Generate Project</button>
    <button id="clear-btn" class="options-button interactive">Clear</button>
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
          <div class="command-group">
            <code id="venvCommand">.\venv\Scripts\activate</code>
            <button class="button-secondary small" id="copyVenvBtn">Copy</button>
          </div>
          <small class="dep-desc">Activate your Python virtual environment</small>
        </div>

        <div class="modal-item">
          <div class="command-group">
            <code id="runCommand">py main.py</code>
            <button class="button-secondary small" id="copyRunBtn">Copy</button>
          </div>
          <small class="dep-desc">Run your project's main file</small>
        </div>

      </div>

    </div>
  </div>
</div>
`;