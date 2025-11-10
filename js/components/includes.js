
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
      <content>Select common project starter files to include.</content>
    </div>

    <div class="modal-backdrop" id="includesModal">
      <div class="modal-card">

        <div class="modal-header">
          <h2>Select Dependencies</h2>
          <span class="material-icons close-modal" id="closeIncludesModal">close</span>
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
          <button class="button-primary" id="saveIncludesBtn">Save</button>
        </div>

      </div>
    </div>

  </div>
`;
