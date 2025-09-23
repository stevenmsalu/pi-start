
export const includes = () => `
  <div class="form-group">
    <label for="includes">Include:</label>
    <div class="checkbox-group">
      <label><input type="checkbox" class="includes-checkbox" value=".env" id="env-toggle">.env</label>
      <label><input type="checkbox" class="includes-checkbox" value=".gitignore" id="gitignore-toggle">.gitignore</label>
      <label><input type="checkbox" class="includes-checkbox" value="readme" id="readme-toggle">README</label>
    </div>
    
    <div class="includes-more">
      <button type="button" id="includes-moreBtn" class="button-tertiary">
        show more
      </button>
    </div>
  </div>
`;