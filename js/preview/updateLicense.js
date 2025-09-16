
export function updateLicense() {
  const licenseSelect = document.getElementById('license');
  const licenseNode = document.getElementById('preview-license');
  if (!licenseNode) return;

  const license =
    licenseSelect && licenseSelect.value !== 'none'
      ? licenseSelect.value
      : '-';
  licenseNode.textContent = license;
}