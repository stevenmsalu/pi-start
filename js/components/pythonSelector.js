
export const pythonSelector = () => `
  <div class="form-group" x-data="{ selected: null }">
    <label>Python Version:</label>
    <div class="checkbox-group">
      
      <!-- Latest -->
      <label>
        <input type="checkbox" value="3.13.0"
          @click="selected = (selected === '3.13.0' ? null : '3.13.0')"
          :checked="selected === '3.13.0'">
        @Latest
      </label>

      <!-- LTS -->
      <label>
        <input type="checkbox" value="3.9.5"
          @click="selected = (selected === '3.9.5' ? null : '3.9.5')"
          :checked="selected === '3.9.5'">
        @LTS
      </label>
    </div>
  </div>
`;