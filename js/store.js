
export function initStore() {
  document.addEventListener('alpine:init', () => {
    Alpine.store('formState', {

      selections: {
        venv: null,          // single selection
        pythonVersion: null, // single selection
        license: null,       // single selection
        dependencies: [],    // multi selection
        includeOptions: [],  // multi selection
      },

      // Toggle Helpers 
      toggleSingle(group, value) {
        if (!this.selections.hasOwnProperty(group)) return;
        this.selections[group] = (this.selections[group] === value) ? null : value;
      },

      toggleMultiple(group, value) {
        if (!this.selections.hasOwnProperty(group)) return;
        const current = this.selections[group] || [];
        this.selections[group] = current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value];
      },

      isSelected(group, value) {
        const state = this.selections[group];
        return Array.isArray(state) ? state.includes(value) : state === value;
      },

      // Clearing Helpers
      clearGroup(group) {
        if (!this.selections.hasOwnProperty(group)) return;
        this.selections[group] = Array.isArray(this.selections[group]) ? [] : null;
      },

      clearAll() {
        Object.keys(this.selections).forEach(g => this.clearGroup(g));
      },
    });
  });
}
