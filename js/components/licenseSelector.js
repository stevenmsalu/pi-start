
export const licenseSelector = () => `
  <div class="form-group" x-data="{ selected: null }">
    <label for="license">License:</label>
    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="mit"
          @click="selected = (selected === 'mit' ? null : 'mit')"
          :checked="selected === 'mit'">
        MIT
      </label>
      <label>
        <input type="checkbox" value="apache"
          @click="selected = (selected === 'apache' ? null : 'apache')"
          :checked="selected === 'apache'">
        Apache 2.0
      </label>
    </div>

    <div class="license-more">
      <button type="button" id="license-moreBtn" class="button-tertiary">
        show more
      </button>
    </div>
  </div>
`;
