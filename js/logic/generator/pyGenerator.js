
export async function generatePythonProject(config) {
    const files = {};
    const root = config.project_name;

    /* -------------------------------
    1. Python Version
    -------------------------------- */
    if (config.python_version) {
        files[`${root}/.python-version`] = config.python_version;
    }

    /* ------------------------------
    2. Virtual Environment 
    -------------------------------*/
    if (config.virtual_environment) {
        const venv = config.virtual_environment;

        files[`${root}/${venv}/`] = "";
        files[`${root}/${venv}/bin/`] = "";
        files[`${root}/${venv}/lib/`] = "";
    }

    /* -------------------------------
    3. requirements.txt
    ------------------------------- */
    if (config.includes.includes("requirements.txt")) {
        files[`${root}/requirements.txt`] = config.dependencies.join("\n");
    }

    /* -------------------------------
    4. License File
    ------------------------------- */
    const LICENSE_TEMPLATES = {
        mit: "MIT License\n\nCopyright (c) 2025 <Your Name>",
        apache: "Apache License 2.0\n\nCopyright 2025 <Your Name>",
        gpl3: "GNU GPL v3 — See https://www.gnu.org/licenses/gpl-3.0.en.html",
        bsd: "BSD 3-Clause License",
        isc: "ISC License",
        lgpl3: "GNU Lesser GPL v3",
        mpl2: "Mozilla Public License 2.0",
    };

    if (config.license) {
        const text =
            LICENSE_TEMPLATES[config.license.toLowerCase()] ||
            `License: ${config.license}`;
        files[`${root}/LICENSE`] = text;
    }

    /* -------------------------------
    5. Includes
    ------------------------------- */
    const includes = config.includes;

    // .env
    if (includes.includes(".env")) {
        files[`${root}/.env`] = "SECRET_KEY=your_key_here";
    }

    // .gitignore
    if (includes.includes(".gitignore")) {
        files[`${root}/.gitignore`] =
            "__pycache__/\n*.pyc\n.env\nvenv/";
    }

    // README.md
    if (includes.includes("README.md")) {
        files[`${root}/README.md`] = `# ${root}\nGenerated with Pi-Start.`;
    }

    // setup.py
    if (includes.includes("setup.py")) {
        files[`${root}/setup.py`] =
            "from setuptools import setup\nsetup(name='app')";
    }

    // main.py
    if (includes.includes("main.py")) {
        files[`${root}/main.py`] = "print('Hello from Pi-Start!')";
    }

    // .prettierrc
    if (includes.includes(".prettierrc")) {
        files[`${root}/.prettierrc`] = `{
            "singleQuote": true
        }`;
    }

    // pyproject.toml
    if (includes.includes("pyproject.toml")) {
        files[`${root}/pyproject.toml`] = `[project]
        name = "app"`;
    }

    // CHANGELOG.md
    if (includes.includes("CHANGELOG.md")) {
        files[`${root}/CHANGELOG.md`] =
            "# Changelog\nAll notable changes...";
    }

    // CONTRIBUTING.md
    if (includes.includes("CONTRIBUTING.md")) {
        files[`${root}/CONTRIBUTING.md`] = "## Contribution Guidelines";
    }

    // tests folder + basic test file
    if (includes.includes("tests")) {
        files[`${root}/tests/`] = "";
        files[`${root}/tests/test_basic.py`] =
            "def test_example():\n    assert True";
    }

    // pytest.ini
    if (includes.includes("pytest.ini")) {
        files[`${root}/pytest.ini`] = `[pytest]
        testpaths = tests`;
    }

    return files;
}