
export const frameworkSelector = () => `
  <div class="form-group" x-data="{ selected: null }">
    <label>Framework:</label>
    <div class="checkbox-group">
      <label>
        <input type="checkbox" value="flask"
          @click="selected = (selected === 'flask' ? null : 'flask')"
          :checked="selected === 'flask'">
        Flask
      </label>
      <label>
        <input type="checkbox" value="django"
          @click="selected = (selected === 'django' ? null : 'django')"
          :checked="selected === 'django'">
        Django
      </label>
      <label>
        <input type="checkbox" value="fastapi"
          @click="selected = (selected === 'fastapi' ? null : 'fastapi')"
          :checked="selected === 'fastapi'">
        FastAPI
      </label>
    </div>
  </div>
`;