(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const year = document.querySelector("[data-year]");
  const config = window.SITE_CONFIG || {};

  if (year) year.textContent = String(new Date().getFullYear());

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((el) => {
      if (value) {
        el.textContent = value;
        el.closest("[data-requires]")?.removeAttribute("hidden");
      }
    });
  };

  setText("[data-email-text]", config.email);
  setText("[data-phone-text]", config.phone);
  setText("[data-venue-name]", config.venueName);
  document.querySelectorAll("[data-venue-address]").forEach((el) => {
    if (config.venueAddress && !el.textContent.trim()) {
      el.textContent = config.venueAddress;
    }
  });

  document.querySelectorAll("[data-email-href]").forEach((el) => {
    if (config.email) el.setAttribute("href", "mailto:" + config.email);
  });
  document.querySelectorAll("[data-phone-href]").forEach((el) => {
    if (config.phone) el.setAttribute("href", "tel:" + config.phone.replace(/[^0-9+]/g, ""));
  });
  document.querySelectorAll("[data-line-href]").forEach((el) => {
    if (config.lineUrl) {
      el.setAttribute("href", config.lineUrl);
      el.closest("[data-requires]")?.removeAttribute("hidden");
    }
  });
  document.querySelectorAll("[data-maps-href]").forEach((el) => {
    const q = encodeURIComponent(config.mapsQuery || config.venueAddress || "山口県山口市佐山");
    el.setAttribute("href", "https://maps.google.com/?q=" + q);
  });

  const hasDirectContact = Boolean(config.email || config.phone || config.lineUrl);
  document.querySelectorAll("[data-contact-ready]").forEach((el) => {
    el.toggleAttribute("hidden", !hasDirectContact);
  });
  document.querySelectorAll("[data-contact-pending]").forEach((el) => {
    el.toggleAttribute("hidden", hasDirectContact);
  });
})();
