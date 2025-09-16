
export const noFrameworkTree = `
  <ul class="tree">
    <li data-type="folder">
      📂 <span id="preview-name"></span>
      <ul>
        <li data-type="folder">📂 src
          <ul>
            <li data-type="file" data-name="main.py">📄 main.py</li>
          </ul>
        </li>
        <li data-type="file" data-name=".env">📄 .env</li>
        <li data-type="file" data-name=".gitignore">📄 .gitignore</li>
        <li data-type="file" data-name="LICENSE">📄 LICENSE <span id="preview-license"></span></li>
        <li data-type="file" data-name="README.md">📄 README.md</li>
        <li data-type="file" data-name="requirements.txt">📄 requirements.txt - <span id="preview-framework"></span> <</li>
      </ul>
    </li>
  </ul>
`;
