
export function updateIncludes() {
  const includesNodes = document.querySelectorAll('.includes-checkbox:checked');
  const includes = includesNodes.length
    ? Array.from(includesNodes).map(cb => cb.value)
    : [];

  const includesNode = document.getElementById('preview-includes');
  if (!includesNode) return;

  includesNode.textContent = includes.length ? includes.join(', ') : '-';
}