
export function updateName() {
  const nameInput = document.getElementById('project-name');
  const nameNode = document.getElementById('preview-name');
  if (!nameNode) return;

  const name = nameInput && nameInput.value.trim()
    ? nameInput.value.trim()
    : 'project name';
  nameNode.textContent = name;
}