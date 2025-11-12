
export const VirtualEnvSelector = () => `
  <div class="form-group" x-data>
    
    <div class="label-row">
      <label>Virtual Environment</label>
      <span class="material-icons info-icon" data-info="venv-info">info</span>
    </div>

    <div class="checkbox-group">
      <label class="custom-checkbox">
        <input type="checkbox" value="Venv" class="interactive"
          @change="$store.formState.toggleSingle('venv', 'Venv')"
          :checked="$store.formState.isSelected('venv', 'Venv')"
        >
        Venv
      </label>

      <!-- Reactive input field -->
      <input type="text" placeholder="Enter venv name (Optional)"
        x-show="$store.formState.isSelected('venv', 'Venv')"
        x-transition
        x-ref="venvInput"
        @focus="$el.select()"
      >
    </div>

    <div class="info-card" id="venv-info" style="width: 260px">
      <content>Using a virtual environment isolates your project dependencies.</content>
    </div>

  </div>
`;