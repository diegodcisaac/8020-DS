/* ============================================================
   8020-DS — assets/book.js
   Interacoes de book (longform): barra de progresso, nav scrolled,
   scroll-spy, reveal por scroll, barras [data-fill], count-up
   [data-count]. Vanilla, zero dependencia. Respeita reduced-motion.
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- barra de progresso + nav scrolled ---- */
  var bar = document.querySelector(".book-progress");
  var nav = document.querySelector(".book-nav");
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? (h.scrollTop || window.pageYOffset) / max : 0;
    if (bar) bar.style.width = (p * 100) + "%";
    if (nav) nav.classList.toggle("scrolled", (h.scrollTop || window.pageYOffset) > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- scroll-spy dos links de nav ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".book-nav a[href^='#']"));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  if (links.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var i = targets.indexOf(e.target);
          links.forEach(function (l, j) { l.classList.toggle("active", j === i); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(function (t) { if (t) spy.observe(t); });
  }

  /* ---- count-up de numeros ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    if (reduce) { el.textContent = target.toFixed(decimals); return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(step);
  }

  /* ---- reveal + barras + count-up via observer ---- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("is-visible");
        if (el.hasAttribute("data-fill") && !reduce) {
          el.style.width = el.getAttribute("data-fill");
        } else if (el.hasAttribute("data-fill")) {
          el.style.transition = "none"; el.style.width = el.getAttribute("data-fill");
        }
        if (el.hasAttribute("data-count")) countUp(el);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal, [data-fill], [data-count]").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
    document.querySelectorAll("[data-fill]").forEach(function (el) { el.style.width = el.getAttribute("data-fill"); });
    document.querySelectorAll("[data-count]").forEach(function (el) { el.textContent = el.getAttribute("data-count"); });
  }

  /* ---- supermenu: overlay de indice (integrado a todas as paginas) ---- */
  var menu = document.querySelector(".book-menu");
  var openBtn = document.querySelector(".book-menu-toggle");
  var closeBtn = document.querySelector(".book-menu-close");
  function setMenu(open) { if (!menu) return; menu.classList.toggle("open", open); document.body.style.overflow = open ? "hidden" : ""; }
  if (openBtn) openBtn.addEventListener("click", function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });
  if (menu) {
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  }
})();
