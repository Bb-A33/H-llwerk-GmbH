/* Hüllwerk GmbH – Interaktionen */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Kopfzeile beim Scrollen kompakter */
  var header = document.querySelector(".header");
  function onScroll() {
    if (header) header.classList.toggle("is-compact", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile Navigation */
  var toggle = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      mobileNav.classList.toggle("is-open", open);
    }
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* Sanftes Einblenden */
  var reveals = document.querySelectorAll(".reveal");
  /* Elemente in Rastern leicht gestaffelt einblenden */
  document.querySelectorAll(".cards, .refs, .steps, .trust, .stages").forEach(function (grid) {
    grid.querySelectorAll(":scope > .reveal").forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 80 + "ms";
    });
  });
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* Aktive Navigation */
  var navLinks = document.querySelectorAll(".nav__list a");
  if ("IntersectionObserver" in window && navLinks.length) {
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var navIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navIo.observe(el);
    });
  }

  /* Vorher-Nachher-Regler */
  document.querySelectorAll(".compare").forEach(function (box) {
    var range = box.querySelector(".compare__range");
    if (!range) return;
    function update() { box.style.setProperty("--pos", range.value + "%"); }
    range.addEventListener("input", update);
    update();
  });

  /* «Mehr erfahren» wählt die passende Leistung im Formular vor */
  var serviceSelect = document.getElementById("f-service");
  document.querySelectorAll("[data-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (serviceSelect) serviceSelect.value = link.getAttribute("data-service");
    });
  });

  /* Offertformular */
  var form = document.getElementById("offer-form");
  if (form) {
    var status = document.getElementById("form-status");
    var messages = {
      name: "Bitte geben Sie Ihren Namen an.",
      telefon: "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      ort: "Bitte geben Sie den Ort des Objekts an.",
      leistung: "Bitte wählen Sie eine Leistung aus.",
      flaeche: "Bitte geben Sie eine Zahl grösser als 0 ein.",
      einwilligung: "Bitte bestätigen Sie die Einwilligung."
    };

    function errorEl(input) {
      var ids = (input.getAttribute("aria-describedby") || "").split(" ");
      for (var i = 0; i < ids.length; i++) {
        if (ids[i].indexOf("e-") === 0) return document.getElementById(ids[i]);
      }
      return null;
    }

    function validateField(input) {
      var msg = "";
      var v = (input.value || "").trim();
      if (input.type === "checkbox") {
        if (input.required && !input.checked) msg = messages[input.name];
      } else if (input.type === "file") {
        var files = input.files || [];
        if (files.length > 5) msg = "Bitte laden Sie höchstens 5 Bilder hoch.";
        var total = 0;
        for (var i = 0; i < files.length; i++) total += files[i].size;
        if (!msg && total > 8 * 1024 * 1024) msg = "Die Fotos sind zusammen grösser als 8 MB. Bitte weniger oder kleinere Bilder wählen – weitere Fotos können Sie uns per E-Mail senden.";
      } else if (input.required && !v) {
        msg = messages[input.name];
      } else if (input.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        msg = messages.email;
      } else if (input.type === "tel" && v && v.replace(/[^\d]/g, "").length < 9) {
        msg = "Bitte prüfen Sie die Telefonnummer.";
      } else if (input.type === "number" && v && !(Number(v) > 0)) {
        msg = messages.flaeche;
      }
      var err = errorEl(input);
      var field = input.closest(".field");
      if (err) err.textContent = msg;
      if (field) field.classList.toggle("has-error", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      return !msg;
    }

    var inputs = form.querySelectorAll("input, select, textarea");
    inputs.forEach(function (input) {
      var evt = input.type === "checkbox" || input.type === "file" || input.tagName === "SELECT" ? "change" : "blur";
      input.addEventListener(evt, function () { validateField(input); });
      input.addEventListener("input", function () {
        if (input.getAttribute("aria-invalid") === "true") validateField(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form__status";
      status.textContent = "";

      var firstInvalid = null;
      inputs.forEach(function (input) {
        if (!validateField(input) && !firstInvalid) firstInvalid = input;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      /* Gültig: normal absenden. Der Formulardienst leitet danach auf danke.html weiter.
         (Normales Absenden statt fetch, damit Foto-Anhänge zuverlässig mitgehen.) */
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = "Wird gesendet …";
      form.submit();
    });
  }

  /* Zurück-Taste nach dem Absenden: Knopf wieder freigeben */
  window.addEventListener("pageshow", function () {
    var b = document.querySelector('#offer-form button[type="submit"]');
    if (b && b.disabled) { b.disabled = false; b.textContent = "Kostenlose Offerte anfragen"; }
  });

  /* Jahr in der Fusszeile */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
