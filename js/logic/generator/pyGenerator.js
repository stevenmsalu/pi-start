
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

    /* -----------------------------------
    3. Auto-Inject Framework Dependencies
    ------------------------------------*/
    let deps = new Set(config.dependencies || []);

    if (deps.has("fastapi")) {
        deps.add("uvicorn");
    }

    if (deps.has("flask")) {
        deps.add("flask");
    }

    if (deps.has("typer")) {
        deps.add("typer");
    }

    config.dependencies = Array.from(deps);

    /* -------------------------------
    4. requirements.txt
    ------------------------------- */
    if (config.includes.includes("requirements.txt")) {
        files[`${root}/requirements.txt`] = config.dependencies.join("\n");
    }

    /* -------------------------------
    5. License File
    ------------------------------- */
    const LICENSE_TEMPLATES = {
        mit: "MIT License",
        apache: "Apache License 2.0",
        gpl3: "GNU GPL v3",
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
    6. Includes
    ------------------------------- */
    const includes = config.includes;

    // .env
    if (includes.includes(".env")) {
        files[`${root}/.env`] = "SECRET_KEY=your_key_here";
    }

    // .gitignore
    if (includes.includes(".gitignore")) {
        const venvName = config.virtual_environment || "venv";

        files[`${root}/.gitignore`] =
            `__pycache__/ 
    *.pyc
    .env
    ${venvName}/`;
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
        let mainContent = "print('Hello from Pi-Start!')";
        const deps = config.dependencies || [];

        if (deps.includes("fastapi")) {
            mainContent = [
                "from fastapi import FastAPI",
                "import uvicorn",
                "",
                "app = FastAPI()",
                "",
                "@app.get('/')",
                "def home():",
                "    return 'Hello from FastAPI & Pi-Start!'",
                "",
                "if __name__ == '__main__':",
                "    uvicorn.run(app, host='127.0.0.1', port=8000)"
            ].join("\n");
        }

        else if (deps.includes("flask")) {
            mainContent = [
                "from flask import Flask",
                "",
                "app = Flask(__name__)",
                "",
                "@app.route('/')",
                "def home():",
                "    return 'Hello from Flask & Pi-Start!'",
                "",
                "if __name__ == '__main__':",
                "    app.run(debug=True)"
            ].join("\n");
        }

        else if (deps.includes("typer")) {
            mainContent = [
                "import typer",
                "",
                "app = typer.Typer()",
                "",
                "@app.command()",
                "def hello(name: str = 'World'):",
                "    typer.echo(f'Hello {name} from Pi-Start!')",
                "",
                "if __name__ == '__main__':",
                "    app()"
            ].join("\n");
        }

        files[`${root}/main.py`] = mainContent;
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