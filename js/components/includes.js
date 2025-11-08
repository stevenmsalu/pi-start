
export const includes = () => `
  <div class="form-group">

    <div class="label-row">
      <label for="includes">Include</label>
      <span class="material-icons info-icon" data-info="includes-info">info</span>
    </div>

    <div class="checkbox-group">
      <label><input type="checkbox" class="includes-checkbox interactive" value=".env" id="env-toggle">.env</label>
      <label><input type="checkbox" class="includes-checkbox interactive" value=".gitignore" id="gitignore-toggle">.gitignore</label>
      <label><input type="checkbox" class="includes-checkbox interactive" value="readme" id="readme-toggle">README</label>
    </div>

    <div class="includes-more">
      <button type="button" id="includes-moreBtn" class="button-tertiary interactive">
        show more
      </button>
    </div>

    <div class="info-card" id="includes-info">
      <content>Select common project starter files to include.</content>
    </div>

  </div>
`;
