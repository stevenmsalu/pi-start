
export function updateFramework(selectedFramework) {
  const frameworkNode = document.getElementById('preview-framework');
  if (!frameworkNode) return;

  const framework = selectedFramework && selectedFramework !== 'none'
    ? selectedFramework
    : '';
  frameworkNode.textContent = framework;
}