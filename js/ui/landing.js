
export const welcomePage = () => `
<header role="banner" class="ui-section-header">
  <div class="ui-layout-container">
    <div class="ui-section-header__layout ui-layout-flex">
      <!-- LOGO -->
      <a href="#" role="link" aria-label="#" class="ui-section-header--logo">
        <svg viewBox="0 0 18 18" height="18" width="18" role="img" aria-label="#">
          <path fill="#353535" d="M0 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"/>
        </svg>
      </a>

      <!-- HAMBURGER -->
      <input type="checkbox" id="ui-section-header--menu-id">
      <label for="ui-section-header--menu-id" class="ui-section-header--menu-icon"></label>

      <!-- MENU -->
      <nav role="navigation" class="ui-section-header--nav ui-layout-flex">
        <a href="#" class="ui-section-header--nav-link">Features</a>
        <a href="#" class="ui-section-header--nav-link">Pricing</a>
        <a href="#" class="ui-section-header--nav-link">About</a>
      </nav>
    </div>
  </div>
</header>

<main role="main">
  <section class="ui-section-hero">
    <div class="ui-layout-container">
      <div class="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">

        <div>
          <h1>Design better.</h1>
          <p class="ui-text-intro">
            Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi.
          </p>

          <!-- CTA -->
          <div class="ui-component-cta ui-layout-flex">
            <button id="get-started-btn" class="ui-component-button ui-component-button-normal ui-component-button-primary">
              Get Started for Free
            </button>
            <p class="ui-text-note"><small>30 days free trial.</small></p>
          </div>
        </div>

        <!-- IMAGE -->
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
             loading="lazy"
             alt="#"
             class="ui-image-half-right">
      </div>
    </div>
  </section>

  <section class="ui-section-customer">
    <div class="ui-layout-container">
      <div class="ui-section-customer__layout ui-layout-flex">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/facebook.svg" class="ui-section-customer--logo">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/pinterest.svg" class="ui-section-customer--logo">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/stripe.svg" class="ui-section-customer--logo ui-section-customer--logo-str">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/dribbble.svg" class="ui-section-customer--logo">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/logos/behance.svg" class="ui-section-customer--logo ui-section-customer--logo-bhn">
      </div>
    </div>
  </section>

  <section class="ui-section-feature">
    <div class="ui-layout-container">

      <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
        <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
             alt="#"
             class="ui-image-half-left">
        <div>
          <h2>Nice Features</h2>
          <p class="ui-text-intro">
            Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">Unlimited domain names.</li>
            <li class="ui-component-list--item ui-component-list--item-check">150+ components.</li>
            <li class="ui-component-list--item ui-component-list--item-check">Lifetime updates.</li>
            <li class="ui-component-list--item ui-component-list--item-check">24/7 technical support.</li>
          </ul>
        </div>
      </div>

      <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
        <div>
          <h2>Nice Features</h2>
          <p class="ui-text-intro">
            Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">Unlimited domain names.</li>
            <li class="ui-component-list--item ui-component-list--item-check">150+ components.</li>
            <li class="ui-component-list--item ui-component-list--item-check">Lifetime updates.</li>
            <li class="ui-component-list--item ui-component-list--item-check">24/7 technical support.</li>
          </ul>
        </div>

        <img src="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
             alt="#"
             class="ui-image-half-right">
      </div>

    </div>
  </section>

  <section class="ui-section-pricing">
    <div class="ui-layout-container">
      <h2>Fair Prices</h2>
      <p class="ui-text-intro">Lorem ipsum dolor sit amet.</p>

      <input type="radio" name="toggle" id="ui-component-toggle__monthly" checked>
      <input type="radio" name="toggle" id="ui-component-toggle__yearly">

      <div class="ui-component-toggle ui-layout-flex">
        <label for="ui-component-toggle__monthly" class="ui-component-toggle--label">Billed Monthly</label>
        <label for="ui-component-toggle__yearly" class="ui-component-toggle--label">Billed Yearly</label>
      </div>

      <p class="ui-text-note"><small>Save 15% with a yearly plan.</small></p>

      <div class="ui-section-pricing__layout ui-layout-grid ui-layout-grid-3">

        <!-- CARD 1 -->
        <div class="ui-component-card ui-component-card--pricing">
          <span><strong>Basic</strong></span>
          <div class="ui-component-card--pricing-price">
            <span class="ui-component-card--pricing-amount ui-component-card--pricing-amount-1"></span>
            <span>/</span><span>month</span>
          </div>
          <span><small>Perfect for early-stage startups.</small></span>
          <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">1 domain name.</li>
            <li class="ui-component-list--item ui-component-list--item-check">HTML components.</li>
            <li class="ui-component-list--item ui-component-list--item-cross">Priority support.</li>
          </ul>
          <a href="#" class="ui-component-button ui-component-button-big ui-component-button-secondary">Get Started</a>
        </div>

        <!-- CARD 2 -->
        <div class="ui-component-card ui-component-card--pricing">
          <span><strong>Standard</strong></span>
          <div class="ui-component-card--pricing-price">
            <span class="ui-component-card--pricing-amount ui-component-card--pricing-amount-2"></span>
            <span>/</span><span>month</span>
          </div>
          <span><small>Perfect for early-stage startups.</small></span>
          <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">1 domain name.</li>
            <li class="ui-component-list--item ui-component-list--item-check">HTML components.</li>
            <li class="ui-component-list--item ui-component-list--item-check">Priority support.</li>
          </ul>
          <a href="#" class="ui-component-button ui-component-button-big ui-component-button-primary">Get Started</a>
        </div>

        <!-- CARD 3 -->
        <div class="ui-component-card ui-component-card--pricing">
          <span><strong>Special</strong></span>
          <div class="ui-component-card--pricing-price">
            <span class="ui-component-card--pricing-amount ui-component-card--pricing-amount-3"></span>
            <span>/</span><span>month</span>
          </div>
          <span><small>Perfect for early-stage startups.</small></span>
          <ul class="ui-component-list ui-component-list--pricing ui-layout-grid">
            <li class="ui-component-list--item ui-component-list--item-check">1 domain name.</li>
            <li class="ui-component-list--item ui-component-list--item-check">HTML components.</li>
            <li class="ui-component-list--item ui-component-list--item-check">Priority support.</li>
          </ul>
          <a href="#" class="ui-component-button ui-component-button-big ui-component-button-secondary">Get Started</a>
        </div>

      </div>
      <p>Have questions? <a href="#">Contact us</a>.</p>
    </div>
  </section>

  <section class="ui-section-testimonial">
    <div class="ui-layout-container">
      <div class="ui-section-testimonial__layout ui-layout-grid ui-layout-grid-2">

        <div class="ui-layout-column-4">
          <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg" class="ui-section-testimonial--avatar">
          <p class="ui-section-testimonial--quote ui-text-intro">
            “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.”
          </p>
          <p class="ui-section-testimonial--author"><strong>Jane Doe</strong><br><small class="ui-text-note">CEO of Company</small></p>
        </div>

        <div class="ui-layout-column-4">
          <img src="https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg" class="ui-section-testimonial--avatar">
          <p class="ui-section-testimonial--quote ui-text-intro">
            “Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna.”
          </p>
          <p class="ui-section-testimonial--author"><strong>Jane Doe</strong><br><small class="ui-text-note">CEO of Company</small></p>
        </div>

      </div>
    </div>
  </section>

  <section class="ui-section-close">
    <div class="ui-layout-container">
      <div class="ui-layout-column-6 ui-layout-column-center">
        <h2>Ready to start?</h2>
        <p class="ui-text-intro">Lorem ipsum dolor sit amet consectetur.</p>
        <div class="ui-component-cta ui-layout-flex">
          <button id="get-started-btn" class="ui-component-button ui-component-button-normal ui-component-button-primary">
            Get Started for Free
          </button>
          <p class="ui-text-note"><small>30 days free trial.</small></p>
        </div>
      </div>
    </div>
  </section>
</main>

<footer role="contentinfo" class="ui-section-footer">
  <div class="ui-layout-container">
    <div class="ui-section-footer__layout ui-layout-flex">
      <p class="ui-section-footer--copyright ui-text-note">
        <small>&copy; 0000 Uisual</small>
      </p>
      <a href="#"><svg viewBox="0 0 24 24" height="16" width="16" stroke="#AEAEAE"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg></a>
      <a href="#"><svg viewBox="0 0 24 24" height="16" width="16" stroke="#AEAEAE"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/></svg></a>
      <a href="#"><svg viewBox="0 0 24 24" height="16" width="16" stroke="#AEAEAE"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72"/></svg></a>
    </div>
  </div>
</footer>
`;