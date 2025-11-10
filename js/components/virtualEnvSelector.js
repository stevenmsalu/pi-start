
export const VirtualEnvSelector = () => `
  <div class="form-group" x-data="{ selected: null }">

    <div class="label-row">
      <label>Virtual Environment</label>
      <span class="material-icons info-icon" data-info="venv-info">info</span>
    </div>

    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="Venv" class="interactive"
          @click="selected = (selected === 'Venv' ? null : 'Venv')"
          :checked="selected === 'Venv'">
        Venv
      </label>
    </div>

    <div class="info-card" id="venv-info" style="width: 260px">
      <content>Using a virtual environment isolates your project dependencies.</content>
    </div>

  </div>
`;