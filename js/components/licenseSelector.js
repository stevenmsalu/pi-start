
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

    <!-- License Modal -->
    <div class="modal-backdrop" id="licenseModal" x-data="{ selected: null }">
      <div class="modal-card">

        <div class="modal-header">
          <h2>Select License</h2>
          <span class="material-icons close-modal" id="closeLicenseModal">close</span>
        </div>

        <!-- Scrollable section -->
        <div class="modal-body scrollable">

          <!-- Common Open Source Licenses -->
          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="mit"
                @click="selected = (selected === 'mit' ? null : 'mit')"
                :checked="selected === 'mit'">
              MIT License
            </label>
            <small class="dep-desc">A short, permissive license allowing reuse with attribution.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="apache"
                @click="selected = (selected === 'apache' ? null : 'apache')"
                :checked="selected === 'apache'">
              Apache License 2.0
            </label>
            <small class="dep-desc">Allows modification and distribution with a NOTICE file.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="gpl"
                @click="selected = (selected === 'gpl' ? null : 'gpl')"
                :checked="selected === 'gpl'">
              GNU GPL v3
            </label>
            <small class="dep-desc">Copyleft license requiring derivatives to remain open source.</small>
          </div>

          <!-- Less Restrictive Licenses -->
          <h3 class="dep-section" style="margin-top: 2rem">Permissive Licenses</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="bsd"
                @click="selected = (selected === 'bsd' ? null : 'bsd')"
                :checked="selected === 'bsd'">
              BSD 3-Clause
            </label>
            <small class="dep-desc">Flexible license similar to MIT but with attribution clause.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="isc"
                @click="selected = (selected === 'isc' ? null : 'isc')"
                :checked="selected === 'isc'">
              ISC License
            </label>
            <small class="dep-desc">Simplified MIT-like license with minimal conditions.</small>
          </div>

          <!-- Others -->
          <h3 class="dep-section" style="margin-top: 2rem">Other Licenses</h3>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="lgpl"
                @click="selected = (selected === 'lgpl' ? null : 'lgpl')"
                :checked="selected === 'lgpl'">
              GNU LGPL v3
            </label>
            <small class="dep-desc">Allows linking to closed-source software under some terms.</small>
          </div>

          <div class="form-group modal-item">
            <label class="checkbox-group">
              <input type="checkbox" value="mpl"
                @click="selected = (selected === 'mpl' ? null : 'mpl')"
                :checked="selected === 'mpl'">
              Mozilla Public License 2.0
            </label>
            <small class="dep-desc">Requires shared modifications for MPL-licensed files only.</small>
          </div>

        </div>

        <div class="modal-footer">
          <button class="button-primary" id="saveLicenseBtn">Done</button>
        </div>

      </div>
    </div>

  </div>
`;