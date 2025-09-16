let editor; 
let currentFile = null;

export function initFileTree() {
  const treeRoot = document.getElementById("preview-container");
  const editorContainer = document.getElementById("editor-container");
  const editorTextarea = document.getElementById("file-editor");

  // Init CodeMirror once
  if (!editor) {
    editor = CodeMirror.fromTextArea(editorTextarea, {
      mode: "python",
      theme: "dracula",
      lineNumbers: true,
    });
  }
  editorContainer.style.display = "none";

  // Click handler for tree (folders + files)
  treeRoot.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    // Toggle folders
    if (li.dataset?.type === "folder") {
      const childUl = li.querySelector("ul");
      if (childUl) {
        childUl.classList.toggle("hidden");
      }
    }

    // Open files in editor
    if (li.dataset?.type === "file") {
      currentFile = li.dataset.name;
      editor.setValue(`# Editing ${currentFile}\n`);
      editorContainer.style.display = "block";
    }
  });

  // Save file
  document.getElementById("save-file").addEventListener("click", () => {
    if (currentFile) {
      const content = editor.getValue();
      console.log(`Saved ${currentFile}:`, content);
      alert(`Saved ${currentFile}!`);
    }
  });

  // Delete file
  document.getElementById("delete-file").addEventListener("click", () => {
    if (currentFile) {
      const li = treeRoot.querySelector(`[data-name="${currentFile}"]`);
      if (li) li.remove();

      editor.setValue("");
      editorContainer.style.display = "none";
      alert(`Deleted ${currentFile}`);
      currentFile = null;
    }
  });
}
