# Pi-Start

**Create Python Project Scaffolds in Your Browser**

Pi-Start is an interactive web initializer that helps you create clean, ready-to-use Python structures.

---

## How It Works

Pi-Start is a **Single Page Application (SPA)** built with:

- HTML, CSS, JavaScript  
- AlpineJS for state management  
- JSZip for generating the full Python project archive entirely on the client

The user fills out the form → Pi-Start builds a configuration object → JSZip creates a downloadable .zip containing the full scaffold.

---

## Architecture (Short Overview)

**Frontend (Full Logic Lives Here)**
- UI form components
- Event handlers for user actions
- AlpineJS store for reactive state
- Config Builder: extracts all selected project settings into a single object
- Project Generator: receives the config object and creates the folder/files
- Success modal with dynamic copy-to-clipboard commands to startup project

**Backend**
❌ No backend is used.
⭕ Replaced by JSZip-based generation executed fully in the frontend. 

---

## Example Output (Config Object)

```json
{
  "project_name": "example",
  "virtual_environment": "venv",
  "python_version": "3.13",
  "dependencies": ["python-Dotenv", "fastapi"],
  "license": "mit",
  "includes": [".gitignore", "README.md"]
}

```

## Interactive Features

- Input validation for required fields
- Optional input fields
- Reactive input fields
- Light/Dark mode
- Dynamic icons and buttons
- Smooth animations
- Custom scrollbar design and placement
- Responsive layout
- Collapsible tooltips
- Success modal with copy-to-clipboard actions

---

## Author

Built with ❤️ by Steven Msalu
IWD Project — 2nd Semester 2025
BSc ICT Software Engineering