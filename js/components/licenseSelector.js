
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

    <div class="info-card" id="license-info">
      <content>Choose the license under which your project will be released.</content>
    </div>

  </div>
`;
