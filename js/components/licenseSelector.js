
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
      <label>
        <input type="checkbox" value="gnu"
          @click="selected = (selected === 'gnu' ? null : 'gnu')"
          :checked="selected === 'gnu'">
        GNU
      </label>
      <label>
        <input type="checkbox" value="more"
          @click="selected = (selected === 'more' ? null : 'more')"
          :checked="selected === 'more'">
        More
      </label>
    </div>
  </div>
`;
