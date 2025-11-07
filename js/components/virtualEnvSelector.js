
export const VirtualEnvSelector = () => `
  <div class="form-group" x-data="{ selected: null }">
    <label>Virtual Environment:</label>
    <div class="checkbox-group">
      
      <!-- Latest -->
      <label>
        <input type="checkbox" value="Venv" class="interactive"
          @click="selected = (selected === 'Venv' ? null : 'Venv')"
          :checked="selected === 'Venv'">
        Venv
      </label>

    </div>
  </div>
`;