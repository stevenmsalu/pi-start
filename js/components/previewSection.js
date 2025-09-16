
export const previewSection = () => `
  <h2>Live Preview</h2>

  <div class="file-tree" id="preview-container">
    <!-- Tree content will be dynamically injected here -->
  </div>

  <div id="editor-container" style="display:none; margin-top: 1em;">
    <textarea id="file-editor" style="width:100%; height:200px;"></textarea>
    <div style="margin-top:0.5em;">
      <button id="save-file">💾 Save</button>
      <button id="delete-file">🗑️ Delete</button>
    </div>
  </div>
`;
