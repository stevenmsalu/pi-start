
export function updateDependencies() {
  const dependencies = Array.from(
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const target = document.getElementById('preview-dependencies');
  if (!target) return;

  target.textContent = dependencies.length ? dependencies.join(', ') : '';
}
