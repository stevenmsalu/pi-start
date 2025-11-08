
export const pythonSelector = () => `
  <div class="form-group" x-data="{ selected: null }">

    <div class="label-row">
      <label>Python Version</label>
      <span class="material-icons info-icon" data-info="python-info">info</span>
    </div>

    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="3.13.0" class="interactive"
          @click="selected = (selected === '3.13.0' ? null : '3.13.0')"
          :checked="selected === '3.13.0'">
        @Latest
      </label>

      <label>
        <input type="checkbox" value="3.9.5" class="interactive"
          @click="selected = (selected === '3.9.5' ? null : '3.9.5')"
          :checked="selected === '3.9.5'">
        @LTS
      </label>
    </div>

    <div class="info-card" id="python-info">
      <content>Choose the Python version your project will run on.</content>
    </div>

  </div>
`;