# Pi-Start

**Create Python Project Scaffolds in Your Browser**

Pi-Start is an interactive web initializer that helps you create clean, ready-to-use Python projects.

---

## How It Works

Pi-Start is a **Single Page Application (SPA)** built with:

- HTML, CSS, JavaScript  
- AlpineJS for state management  

The app collects your project settings and sends them to a backend service that generates the final scaffold.

---

## Architecture (Short Overview)

**Frontend**
- Form components
- Event Handlers  
- AlpineJS state store  
- Extractor that builds a configuration object  

**Backend** : `Out of scope for this assignment`
- Receives configuration  
- Generates the Python project folder with all selected options  

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