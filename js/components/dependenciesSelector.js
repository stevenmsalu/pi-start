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

        <div class="modal-body">

          <!-- Dependency Item -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="dependency1">
              Dependency
            </label>
            <small class="dep-desc">dependency description in small font</small>
          </div>

          <!-- Numpy -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="numpy">
              Numpy
            </label>
            <small class="dep-desc">Numpy is a python dependency</small>
          </div>

          <!-- Pandas -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="pandas">
              Pandas
            </label>
            <small class="dep-desc">Pandas is a fast python dataframe library</small>
          </div>

          <!-- Requests -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="requests">
              Requests
            </label>
            <small class="dep-desc">Requests is the standard HTTP client for Python</small>
          </div>

        </div>

        <div class="modal-footer">
          <button class="button-primary" id="saveDependenciesBtn">Save</button>
        </div>

      </div>
    </div>
  </div>
`;