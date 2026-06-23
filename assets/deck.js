/* ============================================================
   8020-DS — assets/deck.js
   Navegacao de deck 16:9: escala o palco para caber na viewport,
   teclado (setas/espaco), clique, dots de progresso, fullscreen.
   Vanilla, zero dependencia.
   ============================================================ */
(function () {
  "use strict";
  var stage = document.querySelector(".stage");
  if (!stage) return;
  var slides = Array.prototype.slice.call(stage.querySelectorAll(".slide"));
  var i = 0;

  /* ---- escala o palco 1280x720 para caber ---- */
  function fit() {
    var s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
    stage.style.transform = "scale(" + s + ")";
  }
  window.addEventListener("resize", fit);
  fit();

  /* ---- dots de progresso ---- */
  var prog = document.querySelector(".deck-progress");
  if (prog) {
    slides.forEach(function (_, n) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Ir para slide " + (n + 1));
      b.addEventListener("click", function () { go(n); });
      prog.appendChild(b);
    });
  }

  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (sl, k) { sl.classList.toggle("active", k === i); });
    if (prog) Array.prototype.forEach.call(prog.children, function (d, k) { d.classList.toggle("active", k === i); });
  }
  function next() { go(i + 1); }
  function prev() { go(i - 1); }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { next(); e.preventDefault(); }
    else if (e.key === "ArrowLeft" || e.key === "PageUp") { prev(); e.preventDefault(); }
    else if (e.key === "f" || e.key === "F") { if (!document.fullscreenElement) document.documentElement.requestFullscreen(); else document.exitFullscreen(); }
  });
  stage.addEventListener("click", function (e) { if (e.target.closest("a, button")) return; next(); });

  /* ---- toque ---- */
  var x0 = null;
  stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
    x0 = null;
  });

  go(0);
})();
