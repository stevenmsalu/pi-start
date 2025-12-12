
export const welcomePage = () => `
<div role="banner" class="ui-section-header">
  <div class="ui-layout-container">
    <div class="ui-section-header__layout ui-layout-flex">

      <!-- LOGO -->
      <a href="#" role="link" aria-label="Pi-Start" class="ui-section-header--logo">
        <svg viewBox="0 0 18 18" height="18" width="18" role="img" aria-label="Pi-Start Logo">
          <path fill="#353535" d="M0 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"/>
        </svg>
      </a>

      <!-- HAMBURGER -->
      <input type="checkbox" id="ui-section-header--menu-id">
      <label for="ui-section-header--menu-id" class="ui-section-header--menu-icon"></label>

      <!-- MENU -->
      <nav role="navigation" class="ui-section-header--nav ui-layout-flex cursor-pointer">
        <a href="#features" class="ui-section-header--nav-link">Features</a>
        <a href="#support" class="ui-section-header--nav-link">Support Us</a>
        <a href="#about" class="ui-section-header--nav-link">About</a>
      </nav>

    </div>
  </div>
</div>

<main role="main">

  <!-- HERO -->
  <section class="ui-section-hero hide-cursor">
    <div class="ui-layout-container">
      <div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">

        <div>
          <h1>Start Fast. Code Faster.</h1>
          <p class="ui-text-intro">
            Generate a ready-to-code Python project in seconds with Pi-Start —
            so you can focus on learning, not setup.
          </p>

          <!-- CTA -->
          <div class="ui-component-cta ui-layout-flex">
            <button id="get-started-btn" class="ui-component-button ui-component-button-normal ui-component-button-primary cursor-pointer">
              Begin Your Journey
            </button>
            <p class="ui-text-note">
              <small>No installs. No terminal headaches.</small>
            </p>
          </div>
        </div>

        <!-- IMAGE -->
        <img src="/assets/hero-img.svg"
             loading="lazy"
             alt="Pi-Start Hero"
             class="ui-image-half-right-mask">
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section id="features" class="ui-section-feature hide-cursor">
    <div class="ui-layout-container">

      <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
        <img src="/assets/zero.svg"
             loading="lazy"
             alt="Zero-friction"
             class="ui-image-half-left">

        <div>
          <h2>Zero Friction, Great Features</h2>
          <p class="ui-text-intro">
            Pi-Start removes the most frustrating part of starting a Python project.
            No more fighting the command line — just start coding.
          </p>

          <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">
              Automatic virtual environment setup
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              One-click dependency installation
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Clean, beginner-friendly project structure
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Runs entirely in the browser — no local setup required
            </li>
          </ul>
        </div>
      </div>

      <!-- SUPPORT US -->
      <div id="support" class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
        <div>
          <h2>Support Pi-Start</h2>
          <p class="ui-text-intro">
            Pi-Start is completely free and built to help beginners learn Python
            without setup frustration. If this tool saves you time or stress,
            your support helps keep it running and improving.
          </p>

          <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">
              Keep Pi-Start free for everyone
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Support new features and templates
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Help cover hosting and maintenance costs
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Encourage open-source learning tools
            </li>
          </ul>
        </div>

        <!-- SUPPORT CARD -->
        <div class="ui-component-card ui-component-card--pricing">
          <span><strong>Supporter</strong></span>
          <div class="ui-component-card--pricing-price">
            <span class="ui-component-card--pricing-amount ui-component-card--pricing-amount-1"></span>
            <span>/</span><span>month</span>
          </div>
          <span><small>A small contribution that makes a big difference.</small></span>

          <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">
              Support ongoing development
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Help keep Pi-Start free
            </li>
            <li class="ui-component-list--item ui-component-list--item-check">
              Early access to improvements
            </li>
          </ul>

          <a href="#" class="ui-component-button ui-component-button-big ui-component-button-secondary">
            Support Pi-Start
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT US -->
  <section id="about" class="ui-section-feature aboutus">
    <div class="ui-layout-container">
      <h2>About Pi-Start</h2>

      <p class="ui-text-intro">
        Pi-Start is a web-based Python project initializer designed to remove
        the friction beginners face when starting out with Python.
      </p>

      <p>
        For many learners, the hardest part of programming isn't the language itself —
        it's setting up the environment. Virtual environments, dependency installation,
        and unfamiliar command-line tools often become barriers before learning even begins.
      </p>

      <p>
        Pi-Start solves this by generating a clean, ready-to-code Python project
        directly in the browser. With sensible defaults and a beginner-friendly
        structure, learners can focus on writing and understanding Python code
        instead of wrestling with setup commands.
      </p>

      <p>
        Whether you are a student taking your first programming course, a self-learner
        exploring Python, or an educator helping others get started, Pi-Start exists
        to help you start fast — and learn faster.
      </p>
    </div>
  </section>

</main>
`;