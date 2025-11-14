
export const pythonSelector = () => `
  <div class="form-group" x-data>
    
    <div class="label-row">
      <label>Python Version</label>
      <span class="material-icons info-icon" data-info="python-info">info</span>
    </div>

    <div class="checkbox-group python-checkbox-group">
      <label class="custom-checkbox">
        <input type="checkbox" value="3.13.0" class="interactive"
          @change="$store.formState.toggleSingle('pythonVersion', '3.13.0')"
          :checked="$store.formState.isSelected('pythonVersion', '3.13.0')">
        @Latest
      </label>

      <label class="custom-checkbox">
        <input type="checkbox" value="3.9.5" class="interactive"
          @change="$store.formState.toggleSingle('pythonVersion', '3.9.5')"
          :checked="$store.formState.isSelected('pythonVersion', '3.9.5')">
        @LTS
      </label>
    </div>

    <p class="error-msg" id="python-version-error"></p>

    <div class="info-card" id="python-info" style="width: 260px">
      <content>Choose the Python version your project will run on.</content>
    </div>

  </div>
`;