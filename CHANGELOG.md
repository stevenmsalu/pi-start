# Changelog

## [2025-09-15]

### Added
- **Initial frontend layout** (`index.html`):
  - Input for project name
  - Framework selector: `None`, `Flask`, `Django`, `FastAPI`
  - Dependencies selector: `Floe`, `Requests`, `Numpy`, `Pandas`
  - License options: `MIT`, `Apache`, `GPL`
  - Checkboxes to include `.env` and `.gitignore` files
  - "Generate Project" button
  - Live preview section
  - Feedback modal with download confirmation

- **JavaScript logic** (`js/main.js`):
  - Injects all form components dynamically into the DOM
  - Adds event listener for the "Generate Project" button (currently placeholder behavior)

- **Modular UI components** (`js/components.js`):
  - `projectNameInput()` – returns project name input HTML
  - `frameworkSelector()` – returns framework selection dropdown
  - `dependenciesSelector()` – returns dependency checkboxes (`requests`, `numpy`, `pandas`)
  - `licenseSelector()` – returns license dropdown (`MIT`, `Apache`, `GPL`)
  - `optionalToggle()` – checkbox for including a `.env` `gitgnore` `README` files
  - `generateButton()` – button to trigger project generation

- **Basic styling** (`css/styles.css`):
  - Responsive layout with styled form and preview sections
  - Button styles, modal styles, and input field formatting
  - Clean and modern UI using box shadows, spacing, and consistent fonts
