
export const licenseSelector = () => `
  <div class="form-group" x-data="{ selected: null }">

    <div class="label-row">
      <label for="license">License</label>
      <span class="material-icons info-icon" data-info="license-info">info</span>
    </div>

    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="mit" class="interactive"
          @click="selected = (selected === 'mit' ? null : 'mit')"
          :checked="selected === 'mit'">
        MIT
      </label>

      <label>
        <input type="checkbox" value="apache" class="interactive"
          @click="selected = (selected === 'apache' ? null : 'apache')"
          :checked="selected === 'apache'">
        Apache 2.0
      </label>
    </div>

    <div class="license-more">
      <button type="button" id="license-moreBtn" class="button-tertiary interactive">
        show more
      </button>
    </div>

    <div class="info-card" id="license-info" style="width: 260px">
      <content>Choose the license under which your project will be released.</content>
    </div>


    <div class="modal-backdrop" id="licenseModal">
      <div class="modal-card">

        <div class="modal-header">
          <h2>Select Dependencies</h2>
          <span class="material-icons close-modal" id="closeLicenseModal">close</span>
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
          <button class="button-primary" id="saveLicenseBtn">Save</button>
        </div>

      </div>
    </div>

  </div>
`;
