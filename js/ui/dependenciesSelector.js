
export const dependenciesSelector = () => `
  <div class="form-field" x-data>
  
    <div class="dependencies-container">
      <button type="button" id="addDependencyBtn" class="button button-secondary interactive">
        + Add Dependencies
      </button>
    </div>

    <!-- Dependency Modal -->
    <div class="modal-backdrop" id="dependenciesModal">
      <div class="modal-card" style="width: 450px; height: 500px;" x-data>
        <div class="modal-header">
          <h2>Select Dependencies</h2>
          <span class="material-icons close-modal" id="closeDependenciesModal">close</span>
        </div>

        <!-- Scrollable section -->
        <div class="modal-body scrollable">

          <!-- Core Utilities -->
          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="requests" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'requests')"
                :checked="$store.formState.isSelected('dependencies', 'requests')">
              Requests
            </label>
            <small class="dep-desc">HTTP library for sending web requests easily.</small>
          </div>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="python-dotenv" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'python-dotenv')"
                :checked="$store.formState.isSelected('dependencies', 'python-dotenv')">
              Python-Dotenv
            </label>
            <small class="dep-desc">Loads environment variables from a .env file.</small>
          </div>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="loguru" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'loguru')"
                :checked="$store.formState.isSelected('dependencies', 'loguru')">
              Loguru
            </label>
            <small class="dep-desc">A modern, lightweight logging library.</small>
          </div>

          <!-- Web / API Development -->
          <h3 class="dep-section" style="margin-top: 2rem">Web / API</h3>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="flask" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'flask')"
                :checked="$store.formState.isSelected('dependencies', 'flask')">
              Flask
            </label>
            <small class="dep-desc">Minimal web framework for APIs and web apps.</small>
          </div>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="fastapi" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'fastapi')"
                :checked="$store.formState.isSelected('dependencies', 'fastapi')">
              FastAPI
            </label>
            <small class="dep-desc">High-performance async API framework for Python.</small>
          </div>

          <!-- Data / Science -->
          <h3 class="dep-section" style="margin-top: 2rem">Data / Science</h3>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="numpy" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'numpy')"
                :checked="$store.formState.isSelected('dependencies', 'numpy')">
              Numpy
            </label>
            <small class="dep-desc">Core library for numerical computing in Python.</small>
          </div>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pandas" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'pandas')"
                :checked="$store.formState.isSelected('dependencies', 'pandas')">
              Pandas
            </label>
            <small class="dep-desc">Powerful data analysis and manipulation library.</small>
          </div>

          <!-- CLI / Tools -->
          <h3 class="dep-section" style="margin-top: 2rem">CLI / Tools</h3>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="typer" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'typer')"
                :checked="$store.formState.isSelected('dependencies', 'typer')">
              Typer
            </label>
            <small class="dep-desc">Easy and modern way to build CLI apps with Python.</small>
          </div>

          <div class="form-field modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pytest" class="interactive"
                @change="$store.formState.toggleMultiple('dependencies', 'pytest')"
                :checked="$store.formState.isSelected('dependencies', 'pytest')">
              Pytest
            </label>
            <small class="dep-desc">Simple yet powerful testing framework.</small>
          </div>

        </div>

      </div>
    </div>
  </div>
`;