import { loadPyodide } from "https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.mjs";

let pyodideInstance = null;

async function initPyodide() {
    if (!pyodideInstance) {
        pyodideInstance = await loadPyodide();
    }
    return pyodideInstance;
}

export async function generatePythonProject(config) {
    const py = await initPyodide();

    // Pass JSON to Python
    py.globals.set("config", config);

    const pythonCode = `
        # Convert JsProxy -> Python dict
        cfg = config.to_py()

        files = {}
        root = cfg["project_name"]

        # -------------------------------
        # 1. Python Version File (.python-version)
        # -------------------------------
        if cfg.get("python_version"):
            files[f"{root}/.python-version"] = cfg["python_version"]


        # -------------------------------
        # 2. Virtual Environment folder
        #   (we just create an empty folder structure)
        # -------------------------------
        venv_name = cfg.get("virtual_environment")
        if venv_name:
            files[f"{root}/{venv_name}/"] = "" 
            files[f"{root}/{venv_name}/bin/"] = ""
            files[f"{root}/{venv_name}/lib/"] = ""


        # -------------------------------
        # 3. Dependencies -> requirements.txt
        # -------------------------------
        if "requirements.txt" in cfg["includes"]:
            reqs = "\\n".join(cfg["dependencies"])
            files[f"{root}/requirements.txt"] = reqs


        # -------------------------------
        # 4. License File
        # -------------------------------
        LICENSE_TEMPLATES = {
            "mit": "MIT License\\n\\nCopyright (c) 2025 <Your Name>",
            "apache": "Apache License 2.0\\n\\nCopyright 2025 <Your Name>",
            "gpl3": "GNU GPL v3 — See https://www.gnu.org/licenses/gpl-3.0.en.html",
            "bsd": "BSD 3-Clause License",
            "isc": "ISC License",
            "lgpl3": "GNU Lesser GPL v3",
            "mpl2": "Mozilla Public License 2.0"
        }

        lic = cfg.get("license")
        if lic:
            text = LICENSE_TEMPLATES.get(lic.lower(), f"License: {lic}")
            files[f"{root}/LICENSE"] = text


        # -------------------------------
        # 5. Includes (many options)
        # -------------------------------

        includes = set(cfg.get("includes", []))

        # .env
        if ".env" in includes:
            files[f"{root}/.env"] = "SECRET_KEY=your_key_here"

        # .gitignore
        if ".gitignore" in includes:
            files[f"{root}/.gitignore"] = "__pycache__/\\n*.pyc\\n.env\\nvenv/"

        # README.md
        if "README.md" in includes:
            files[f"{root}/README.md"] = f"# {root}\\nGenerated with Pi-Start."

        # setup.py
        if "setup.py" in includes:
            files[f"{root}/setup.py"] = "from setuptools import setup\\nsetup(name='app')"

        # main.py
        if "main.py" in includes:
            files[f"{root}/main.py"] = "print('Hello from Pi-Start!')"

        # .prettierrc
        if ".prettierrc" in includes:
            files[f"{root}/.prettierrc"] = "{\\n  \\"singleQuote\\": true\\n}"

        # pyproject.toml
        if "pyproject.toml" in includes:
            files[f"{root}/pyproject.toml"] = "[project]\\nname = \\"app\\""

        # CHANGELOG.md
        if "CHANGELOG.md" in includes:
            files[f"{root}/CHANGELOG.md"] = "# Changelog\\nAll notable changes..."

        # CONTRIBUTING.md
            if "CONTRIBUTING.md" in includes:
                files[f"{root}/CONTRIBUTING.md"] = "## Contribution Guidelines"

        # tests folder + test file
        if "tests" in includes:
            files[f"{root}/tests/"] = ""
            files[f"{root}/tests/test_basic.py"] = "def test_example():\\n    assert True"

        # pytest.ini
        if "pytest.ini" in includes:
            files[f"{root}/pytest.ini"] = "[pytest]\\ntestpaths = tests"


        # Return generated file tree
        files
    `
    const result = py.runPython(pythonCode);
    return result.toJs();
}
