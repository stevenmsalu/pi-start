import JSZip from "https://cdn.skypack.dev/jszip@3.10.1";

export async function downloadZip(fileTree, projectName) {
  const zip = new JSZip();

  for (const [path, content] of Object.entries(fileTree)) {
    zip.file(path, content);
  }

  const blob = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${projectName}.zip`;
  a.click();
}