
export const includes = () => `
  <div class="form-group" x-data>

    <div class="label-row">
      <label for="includes">Include</label>
      <span class="material-icons info-icon" data-info="includes-info">info</span>
    </div>

    <div class="checkbox-group">
      <label class="custom-checkbox">
        <input type="checkbox" class="includes-checkbox interactive" value=".env" 
          @change="$store.formState.toggleMultiple('includeOptions', '.env')"
          :checked="$store.formState.isSelected('includeOptions', '.env')">
        .env  
      </label>

      <label class="custom-checkbox">
        <input type="checkbox" class="includes-checkbox interactive" value=".gitignore" 
          @change="$store.formState.toggleMultiple('includeOptions', '.gitignore')"
          :checked="$store.formState.isSelected('includeOptions', '.gitignore')">
        .gitignore
      </label>

      <label class="custom-checkbox">
        <input type="checkbox" class="includes-checkbox interactive" value="readme"
          @change="$store.formState.toggleMultiple('includeOptions', 'readme')"
          :checked="$store.formState.isSelected('includeOptions', 'readme')">
        README
      </label>
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
      <div class="modal-card" x-data>

        <div class="modal-header">
          <h2>Include Options</h2>
          <span class="material-icons close-modal" id="closeIncludesModal">close</span>
        </div>

        <!-- Scrollable Section -->
        <div class="modal-body scrollable">

          <!-- Core Files -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="requirements.txt" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'requirements.txt')"
                :checked="$store.formState.isSelected('includeOptions', 'requirements.txt')">
              requirements.txt
            </label>
            <small class="dep-desc">Include a dependency requirements file for Python packages.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="setup.py" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'setup.py')"
                :checked="$store.formState.isSelected('includeOptions', 'setup.py')">
              setup.py
            </label>
            <small class="dep-desc">Basic setup script for packaging and installing the project.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="main.py" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'main.py')"
                :checked="$store.formState.isSelected('includeOptions', 'main.py')">
              main.py
            </label>
            <small class="dep-desc">Entry-point Python script for the project.</small>
          </div>

          <!-- Environment / Config -->
          <h3 class="dep-section" style="margin-top: 2rem">Environment / Config</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value=".env.example" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', '.env.example')"
                :checked="$store.formState.isSelected('includeOptions', '.env.example')">
              .env.example
            </label>
            <small class="dep-desc">Example environment file for configuration variables.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value=".prettierrc" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', '.prettierrc')"
                :checked="$store.formState.isSelected('includeOptions', '.prettierrc')">
              .prettierrc
            </label>
            <small class="dep-desc">Formatter configuration file for consistent code styling.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pyproject.toml" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'pyproject.toml')"
                :checked="$store.formState.isSelected('includeOptions', 'pyproject.toml')">
              pyproject.toml
            </label>
            <small class="dep-desc">Modern build configuration file used by Poetry or Flit.</small>
          </div>

          <!-- Documentation -->
          <h3 class="dep-section" style="margin-top: 2rem">Documentation</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="CHANGELOG.md" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'CHANGELOG.md')"
                :checked="$store.formState.isSelected('includeOptions', 'CHANGELOG.md')">
              CHANGELOG.md
            </label>
            <small class="dep-desc">Log file for documenting changes across versions.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="CONTRIBUTING.md" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'CONTRIBUTING.md')"
                :checked="$store.formState.isSelected('includeOptions', 'CONTRIBUTING.md')">
              CONTRIBUTING.md
            </label>
            <small class="dep-desc">Guidelines for contributing to the project.</small>
          </div>

          <!-- Testing -->
          <h3 class="dep-section" style="margin-top: 2rem">Testing</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="tests/" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'tests/')"
                :checked="$store.formState.isSelected('includeOptions', 'tests/')">
              tests/
            </label>
            <small class="dep-desc">Include a starter folder for your unit or integration tests.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pytest.ini" class="includes-checkbox interactive"
                @change="$store.formState.toggleMultiple('includeOptions', 'pytest.ini')"
                :checked="$store.formState.isSelected('includeOptions', 'pytest.ini')">
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