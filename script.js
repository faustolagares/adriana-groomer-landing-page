/* Adriana Groomer — light interactions */
(function () {
  "use strict";

  // Enable reveal animations only when JS runs and motion is allowed.
  var allowMotion = !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (allowMotion) document.documentElement.classList.add("js-anim");

  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  /* ---- Mobile menu ---- */
  if (toggle && nav && links) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    // Close after tapping a link
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  /* ---- Scroll reveal (staggered, works on desktop + mobile) ---- */

  // Single-element reveals (one block fades up as it enters).
  document
    .querySelectorAll(".section-head, .about__head, .about__strip, .puppy__inner, .contact__panel, .addons, .services__foot, .insta__embeds, .insta__cta, .pricing__table")
    .forEach(function (el) { el.classList.add("reveal"); });

  // Grouped reveals: children of a grid cascade in one after another.
  var groups = [
    ".howiwork__grid",
    ".services__grid",
    ".size__grid",
    ".benefits__grid",
    ".ask__list"
  ];
  groups.forEach(function (sel) {
    var container = document.querySelector(sel);
    if (!container) return;
    Array.prototype.forEach.call(container.children, function (child, i) {
      child.classList.add("reveal");
      // staggered cascade, capped so later items don't lag too much
      child.style.transitionDelay = Math.min(i * 90, 450) + "ms";
    });
  });

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
