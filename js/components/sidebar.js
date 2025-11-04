
export const sidebar = () => `
  <div class="nav-top">

    <!-- Theme Toggle -->
    <a href="javascript:void(0)" id="modeToggle" title="Toggle Theme">
      <span id="modeIcon" class="material-icons">light_mode</span>
    </a>

    <!-- SPA Navigation -->
    <a href="#" data-route="home" title="Initializer">
      <span class="material-icons">home</span>
    </a>

    <a href="#" data-route="docs" title="Docs">
      <span class="material-icons">description</span>
    </a>

    <a href="#" data-route="contact" title="Contact">
      <span class="material-icons">help</span>
    </a>

  </div>

  <div class="nav-bottom">
    <a href="https://github.com/stevenmsalu/pie-init" target="_blank" title="GitHub">
      <i class="ti ti-brand-github"></i>
    </a>
  </div>
`;
