
export async function generateProject() {
  const name = document.getElementById('project-name').value || 'my-project';

  const framework = document.getElementById('framework').value;

  const dependencies = Array.from(
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  ).map(cb => cb.value);

  const license = document.getElementById('license').value;
  
  const includes = {
    env: document.getElementById('env-toggle').checked,
    gitignore: document.getElementById('gitignore-toggle').checked,
  };

  const zip = new JSZip();

  zip.file("README.md", `# ${name}\n\nGenerated with Project Generator.\n`);
  
  if (license !== "none") {
    zip.file("LICENSE", `${license.toUpperCase()} License\n`);
  }

  if (includes.env) {
    zip.file(".env", `# Environment variables go here\n`);
  }

  if (includes.gitignore) {
    zip.file(".gitignore", `node_modules/\n.env\n`);
  }

  if (framework !== "none" || dependencies.length > 0) {
    let requirements = [];
    if (framework === "flask") requirements.push("flask");
    if (framework === "django") requirements.push("django");
    if (framework === "fastapi") requirements.push("fastapi");
    requirements.push(...dependencies);
    zip.file("requirements.txt", requirements.join("\n"));
  }

  const src = zip.folder("src");
  src.file("main.py", `print("Hello from ${name}!")\n`);

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `${name}.zip`);
}
