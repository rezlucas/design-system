/* Kota Benefits — Template JS */
(function () {
  'use strict';

  const navToggle     = document.querySelector('.nav-toggle');
  const navMenu       = document.querySelector('.nav-menu');
  const dropdownItems = document.querySelectorAll('.has-dropdown');
  const faqItems      = document.querySelectorAll('.faq-item');
  const countrySelect = document.querySelector('.country-select');
  const countryButton = document.querySelector('.country-select__button');
  const countryMenu   = document.querySelector('.country-menu');
  const selectedCountry = document.querySelector('[data-selected-country]');
  const countryMarkers  = document.querySelectorAll('.country-marker');
  const mapTooltip      = document.querySelector('.map-tooltip');
  const peopleChips     = document.querySelectorAll('.people-chip');
  const testimonialQuote = document.querySelector('.testimonial-quote');
  const emailForms      = document.querySelectorAll('.email-form');
  const chatButton      = document.querySelector('.chat-button');
  const chatPanel       = document.querySelector('.chat-panel');

  /* ── Fechar todos os dropdowns ── */
  const closeDropdowns = (exceptItem) => {
    dropdownItems.forEach((item) => {
      if (item !== exceptItem) {
        item.classList.remove('is-open');
        const btn = item.querySelector('.nav-link[aria-expanded]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  };

  /* ── Mobile hamburger ── */
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      closeDropdowns();
    });
  }

  /* ── Dropdowns ── */
  dropdownItems.forEach((item) => {
    const button = item.querySelector('.nav-link[aria-expanded]');
    if (!button) return;

    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      closeDropdowns(item);
    });

    item.addEventListener('pointerenter', () => {
      button.setAttribute('aria-expanded', 'true');
    });
    item.addEventListener('pointerleave', () => {
      if (!item.classList.contains('is-open')) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });

  /* ── FAQ accordion ── */
  faqItems.forEach((item) => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      faqItems.forEach((other) => {
        other.classList.remove('is-open');
        other.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });

  /* ── Country picker ── */
  const setCountry = (country) => {
    if (selectedCountry) selectedCountry.textContent = country;
    if (mapTooltip) mapTooltip.textContent = `${country} is available on Kota`;
    countryMarkers.forEach((marker) => {
      marker.classList.toggle('is-selected', marker.dataset.country === country);
    });
  };

  if (countrySelect && countryButton && countryMenu) {
    countryButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = countrySelect.classList.toggle('is-open');
      countryButton.setAttribute('aria-expanded', String(isOpen));
    });
    countryMenu.querySelectorAll('[data-country]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setCountry(btn.dataset.country);
        countrySelect.classList.remove('is-open');
        countryButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  countryMarkers.forEach((marker) => {
    const country = marker.dataset.country;
    marker.addEventListener('pointerenter', () => {
      if (mapTooltip) mapTooltip.textContent = `${country} coverage: live`;
    });
    marker.addEventListener('focus', () => {
      if (mapTooltip) mapTooltip.textContent = `${country} coverage: live`;
    });
    marker.addEventListener('click', () => setCountry(country));
  });

  /* ── Testimonials interactivos ── */
  peopleChips.forEach((chip) => {
    const showQuote = () => {
      peopleChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      if (testimonialQuote) testimonialQuote.textContent = chip.dataset.quote;
    };
    chip.addEventListener('pointerenter', showQuote);
    chip.addEventListener('focus', showQuote);
    chip.addEventListener('click', showQuote);
  });

  /* ── Email forms ── */
  emailForms.forEach((form) => {
    const input   = form.querySelector('input');
    const message = form.querySelector('.form-message');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value   = input.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      form.classList.add('has-message');
      if (isValid) {
        message.textContent = 'Thanks — Kota will follow up with next steps.';
        input.setAttribute('aria-invalid', 'false');
        form.classList.add('is-success');
      } else {
        message.textContent = 'Enter a valid work email to continue.';
        input.setAttribute('aria-invalid', 'true');
        form.classList.remove('is-success');
        input.focus();
      }
    });
  });

  /* ── Blog tags ── */
  document.querySelectorAll('.blog-tags button').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.blog-tags button').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  /* ── Bounce animation em logo pills, providers e integration nodes ── */
  document.querySelectorAll('.logo-pill, .provider-logos button, .integration-node').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.animate(
        [
          { transform: 'translateY(-4px) scale(1)' },
          { transform: 'translateY(-4px) scale(1.08)' },
          { transform: 'translateY(-4px) scale(1)' },
        ],
        { duration: 260, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
      );
    });
  });

  /* ── Chat widget ── */
  if (chatButton && chatPanel) {
    chatButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = chatPanel.classList.toggle('is-open');
      chatButton.classList.toggle('is-open', isOpen);
      chatButton.setAttribute('aria-expanded', String(isOpen));
      chatPanel.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  /* ── Fechar ao clicar fora ── */
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-dropdown')) closeDropdowns();

    if (countrySelect && !e.target.closest('.country-select')) {
      countrySelect.classList.remove('is-open');
      if (countryButton) countryButton.setAttribute('aria-expanded', 'false');
    }

    if (chatPanel && !e.target.closest('.chat-panel') && !e.target.closest('.chat-button')) {
      chatPanel.classList.remove('is-open');
      if (chatButton) {
        chatButton.classList.remove('is-open');
        chatButton.setAttribute('aria-expanded', 'false');
        chatPanel.setAttribute('aria-hidden', 'true');
      }
    }
  });

  /* ── Escape fecha tudo ── */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeDropdowns();
    navMenu?.classList.remove('is-open');
    navToggle?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    countrySelect?.classList.remove('is-open');
    countryButton?.setAttribute('aria-expanded', 'false');
    chatPanel?.classList.remove('is-open');
    chatButton?.classList.remove('is-open');
    chatButton?.setAttribute('aria-expanded', 'false');
    chatPanel?.setAttribute('aria-hidden', 'true');
  });

})();
