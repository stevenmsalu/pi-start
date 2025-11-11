
export const includes = () => `
  <div class="form-group">

    <div class="label-row">
      <label for="includes">Include</label>
      <span class="material-icons info-icon" data-info="includes-info">info</span>
    </div>

    <div class="checkbox-group">
      <label><input type="checkbox" class="includes-checkbox interactive" value=".env" id="env-toggle">.env</label>
      <label><input type="checkbox" class="includes-checkbox interactive" value=".gitignore" id="gitignore-toggle">.gitignore</label>
      <label><input type="checkbox" class="includes-checkbox interactive" value="readme" id="readme-toggle">README</label>
    </div>

    <div class="includes-more">
      <button type="button" id="includes-moreBtn" class="button-tertiary interactive">
        show more
      </button>
    </div>

    <div class="info-card" id="includes-info" style="width: 260px">
      <content>Select common project starter files and configuration templates to include.</content>
    </div>

    <!-- Modal for additional include options -->
    <div class="modal-backdrop" id="includesModal">
      <div class="modal-card">

        <div class="modal-header">
          <h2>Include Options</h2>
          <span class="material-icons close-modal" id="closeIncludesModal">close</span>
        </div>

        <!-- Scrollable Section -->
        <div class="modal-body scrollable">

          <!-- Core Files -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="requirements.txt">
              requirements.txt
            </label>
            <small class="dep-desc">Include a dependency requirements file for Python packages.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="setup.py">
              setup.py
            </label>
            <small class="dep-desc">Basic setup script for packaging and installing the project.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="main.py">
              main.py
            </label>
            <small class="dep-desc">Entry-point Python script for the project.</small>
          </div>

          <!-- Environment / Config -->
          <h3 class="dep-section" style="margin-top: 2rem">Environment / Config</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value=".env.example">
              .env.example
            </label>
            <small class="dep-desc">Example environment file for configuration variables.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value=".prettierrc">
              .prettierrc
            </label>
            <small class="dep-desc">Formatter configuration file for consistent code styling.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pyproject.toml">
              pyproject.toml
            </label>
            <small class="dep-desc">Modern build configuration file used by Poetry or Flit.</small>
          </div>

          <!-- Documentation -->
          <h3 class="dep-section" style="margin-top: 2rem">Documentation</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="CHANGELOG.md">
              CHANGELOG.md
            </label>
            <small class="dep-desc">Log file for documenting changes across versions.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="CONTRIBUTING.md">
              CONTRIBUTING.md
            </label>
            <small class="dep-desc">Guidelines for contributing to the project.</small>
          </div>

          <!-- Testing -->
          <h3 class="dep-section" style="margin-top: 2rem">Testing</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="tests/">
              tests/
            </label>
            <small class="dep-desc">Include a starter folder for your unit or integration tests.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pytest.ini">
              pytest.ini
            </label>
            <small class="dep-desc">Pytest configuration file for test discovery and settings.</small>
          </div>

        </div>

        <div class="modal-footer">
          <button class="button-primary" id="saveIncludesBtn">Done</button>
        </div>

      </div>
    </div>

  </div>
`;
