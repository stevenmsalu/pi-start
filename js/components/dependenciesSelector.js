
export const dependenciesSelector = () => `
  <div class="form-group">
    <div class="dependencies-container">
      <button type="button" id="addDependencyBtn" class="button-secondary interactive appearance-base">
        + Add Dependencies
      </button>
    </div>

    <div class="modal-backdrop" id="dependenciesModal">
      <div class="modal-card">

        <div class="modal-header">
          <h2>Select Dependencies</h2>
          <span class="material-icons close-modal" id="closeDependenciesModal">close</span>
        </div>

        <!-- Scrollable section -->
        <div class="modal-body scrollable">

          <!-- Core Utilities -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="requests">
              Requests
            </label>
            <small class="dep-desc">HTTP library for sending web requests easily.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="python-dotenv">
              Python-Dotenv
            </label>
            <small class="dep-desc">Loads environment variables from a .env file.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="loguru">
              Loguru
            </label>
            <small class="dep-desc">A modern, lightweight logging library.</small>
          </div>

          <!-- Web / API Development -->
          <h3 class="dep-section" style="margin-top: 2rem">Web / API</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="flask">
              Flask
            </label>
            <small class="dep-desc">Minimal web framework for APIs and web apps.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="fastapi">
              FastAPI
            </label>
            <small class="dep-desc">High-performance async API framework for Python.</small>
          </div>

          <!-- Data / Science -->
          <h3 class="dep-section" style="margin-top: 2rem">Data / Science</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="numpy">
              Numpy
            </label>
            <small class="dep-desc">Core library for numerical computing in Python.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pandas">
              Pandas
            </label>
            <small class="dep-desc">Powerful data analysis and manipulation library.</small>
          </div>

          <!-- CLI / Tools -->
          <h3 class="dep-section" style="margin-top: 2rem">CLI / Tools</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="typer">
              Typer
            </label>
            <small class="dep-desc">Easy and modern way to build CLI apps with Python.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pytest">
              Pytest
            </label>
            <small class="dep-desc">Simple yet powerful testing framework.</small>
          </div>

        </div>

        <div class="modal-footer">
          <button class="button-primary" id="saveDependenciesBtn">Done</button>
        </div>

      </div>
    </div>
  </div>
`;